import Block from '../../utils/block';
import template from './chat-list.hbs';
import {ChatLabel} from '../chat-label/chat-label';

interface ChatListProps {
  chatLabel: ChatLabel;
  chatLabel2: ChatLabel;
  chatLabel3: ChatLabel;
}

export class ChatList extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.chatLabel = new ChatLabel({
      title: 'My chat',
      lastMessage: 'Last message',
      time: '10:20',
      missing: 3,
    });

    this.children.chatLabel2 = new ChatLabel({
      title: 'My chat',
      lastMessage: 'Last message',
      time: '10:20',
      missing: 3,
    });

    this.children.chatLabel3 = new ChatLabel({
      title: 'My chat',
      lastMessage: 'Last message',
      time: '10:20',
      missing: 3,
    });
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
