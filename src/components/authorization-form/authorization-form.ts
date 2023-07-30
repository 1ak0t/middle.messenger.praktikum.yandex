import Block from '../../utils/block';
import template from './authorization-form.hbs';
import {FormInput} from '../form-input/form-input';
import {Button} from '../button/button';

interface AuthorizationFormProps {
  loginInput: FormInput;
  passwordInput: FormInput;
  buttonSignIn: Button;
}

export class AuthorizationForm extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.loginInput = new FormInput({
      for: 'name',
      label: 'Login',
      type: 'text',
      name: 'name',
      attributes: 'autofocus',
    });

    this.children.passwordInput = new FormInput({
      for: 'password',
      label: 'Password',
      type: 'password',
      name: 'password',
    });

    this.children.buttonSignIn = new Button({
      buttonText: 'Sign In',
    })
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
