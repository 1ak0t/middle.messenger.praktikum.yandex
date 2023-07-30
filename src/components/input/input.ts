import Block from '../../utils/block';
import template from './input.hbs';

interface InputProps {
  for: any;
  type: any;
  name: any;
  attributes?: any;
  events?: {
    click: (event: any) => void,
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template, {
      for: this.props.for,
      label: this.props.label,
      type: this.props.type,
      name: this.props.name,
      attributes: this.props.attributes,
    })
  }
}
