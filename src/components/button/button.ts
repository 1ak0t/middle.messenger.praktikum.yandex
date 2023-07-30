import Block from '../../utils/block';
import template from './button.hbs';

interface ButtonProps {
  buttonText: string;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return this.compile(template, {buttonText: this.props.buttonText});
  }
}
