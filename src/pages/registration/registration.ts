import Block from '../../utils/block';
import template from './registration.hbs';
import {RegistrationForm} from '../../components/registration-form/registration-form';

interface RegistrationFormProps {
  registrationForm: RegistrationForm;
}

export class Registration extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.registrationForm = new RegistrationForm();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
