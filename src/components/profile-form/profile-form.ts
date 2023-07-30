import Block from '../../utils/block';
import template from './profile-form.hbs';
import {FormInput} from '../form-input/form-input';

interface ProfileFormProps {
  emailInput: FormInput;
  loginInput: FormInput;
  displayNameInput: FormInput;
  firstNameInput: FormInput;
  secondNameInput: FormInput;
  phoneInput: FormInput;
}

export class ProfileForm extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.emailInput = new FormInput({
      for: 'email',
      label: 'Email',
      type: 'text',
      name: 'email',
      attributes: 'autofocus',
    });

    this.children.loginInput = new FormInput({
      for: 'login',
      label: 'Login',
      type: 'text',
      name: 'login ',
    });

    this.children.displayNameInput = new FormInput({
      for: 'display_name',
      label: 'Display Name',
      type: 'text',
      name: 'display_name ',
    });

    this.children.firstNameInput = new FormInput({
      for: 'first_name',
      label: 'First Name',
      type: 'text',
      name: 'first_name',
    });

    this.children.secondNameInput = new FormInput({
      for: 'second_name',
      label: 'Second Name',
      type: 'text',
      name: 'second_name',
    });

    this.children.phoneInput = new FormInput({
      for: 'phone',
      label: 'Phone',
      type: 'text',
      name: 'phone',
    });
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
