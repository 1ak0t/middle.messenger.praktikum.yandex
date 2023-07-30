import Block from '../../utils/block';
import template from './error500.hbs';

export class Error500 extends Block {
  constructor() {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
