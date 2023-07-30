import Block from '../../utils/block';
import template from './error404.hbs';

export class Error404 extends Block{
  constructor() {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
