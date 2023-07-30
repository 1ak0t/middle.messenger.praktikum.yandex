import Block from '../../utils/block';
import template from './chat.hbs';
import {ChatList} from '../../components/chat-list/chat-list';
import {Messages} from '../../components/messages/messages';

interface ChatProps {
  chatList: ChatList;
  messages: Messages;
}

export class Chat extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.chatList = new ChatList();
    this.children.messages = new Messages();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
