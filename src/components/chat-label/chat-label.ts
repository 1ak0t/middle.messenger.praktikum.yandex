import Block from '../../utils/block';
import template from './chat-label.hbs';

interface chatLabelProps {
  title: string;
  lastMessage: string;
  time: string;
  missing: number;
  photo?: string;
}

export class ChatLabel extends Block {
  constructor(props: chatLabelProps) {
    super('article', props);

    this.element!.classList.add("chat-label");
  }

  render(): DocumentFragment {
    return this.compile(template, {
      title: this.props.title,
      lastMessage: this.props.lastMessage,
      time: this.props.time,
      missing: this.props.missing,
      photo: this.props.photo,
    });
  }
}
