import {EventBus} from './event-bus';
import {nanoid} from 'nanoid';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow: component-did-mount',
    FLOW_CDU: 'flow: component-did-update',
    FLOW_RENDER: 'flow: render',
  }

  protected props: Record<string, unknown>;
  private eventBus: () => EventBus;
  protected element: HTMLElement | null = null;
  private meta: {tagName: string, props: any};
  protected children: Record<string, Block>;
  private id = nanoid(6);

  constructor(tagName = 'div', propsWithChildren: any = {}) {
    const eventBus = new EventBus();

    const {props, children} = this._getChildrenAndProps(propsWithChildren);

    this.meta = {tagName, props};
    this.children = children;
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: any) {
    const props: Record<string, any> ={};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key,value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    })

    return {props, children};
  }

  _addEvents() {
    const {events = {}} = this.props as {events: Record<string, () => void>};

    Object.keys(events).forEach(eventName => {
      this.element!.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const {tagName} = this.meta;
    this.element = this._createDocumentElement(tagName);
  }

  _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps(nextProps: any) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }
  get getElement() {
    return this.element;
  }

  _render() {
    const block = this.render();
    this.element!.innerHTML = '';
    this.element!.append(block);

    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  compile(template: (context: any) => string, context: any) {
    const contextAndStubs = {...context};

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);
    const temp = document.createElement('template');

    temp.innerHTML = html;
    Object.entries(this.children).forEach(([name, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target: any, prop: string | symbol, receiver: any): any {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: any, prop: string | symbol, newValue: any, receiver: any): boolean {
        const oldTarget = {...target};
        target[prop] = newValue;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty(target: any, prop: string | symbol): boolean {
        throw new Error('Нет доступа');
      }
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }
}

export default Block;
