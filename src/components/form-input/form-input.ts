import Block from '../../utils/block';
import template from './form-input.hbs';
import {Input} from '../input/input';

interface FormInputProps {
  for: string;
  label: string;
  type: string;
  name: string;
  attributes?: string;
  events?: {
    blur: (event: any) => void,
  }
}
export class FormInput extends Block {
  constructor(props: FormInputProps) {
    super('div', props);

  }

  init() {
    this.children.input = new Input({
      for: this.props.for,
      type: this.props.type,
      name: this.props.name ,
      attributes: this.props.attributes,
      events: {
        click: (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log('Test');
        }
      }
    });
  }

  render(): DocumentFragment {
    return this.compile(template, {
      for: this.props.for,
      label: this.props.label,
      type: this.props.type,
      name: this.props.name,
      attributes: this.props.attributes,
    });
  }
}
