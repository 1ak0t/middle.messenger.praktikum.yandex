import Block from '../../utils/block';
import template from './message.hbs';

interface MessageProps {
  text: string;
  time: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return this.compile(template, {
      text: this.props.text,
      time: this.props.time,
    })
  }
}
