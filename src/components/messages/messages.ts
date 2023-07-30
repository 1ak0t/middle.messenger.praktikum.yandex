import Block from '../../utils/block';
import template from './messages.hbs';
import {Message} from '../message/message';

interface MessagesProps {
  message: Message
}

export class Messages extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.message = new Message({
      text: 'My text',
      time: '10:55',
    });
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
