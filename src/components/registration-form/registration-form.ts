import Block from '../../utils/block';
import template from './registration-form.hbs';
import {FormInput} from '../form-input/form-input';
import {Button} from '../button/button';

interface RegistrationFormProps {
  emailInput: FormInput;
  loginInput: FormInput;
  firstNameInput: FormInput;
  secondNameInput: FormInput;
  phoneInput: FormInput;
  passwordInput: FormInput;
  repeatPasswordInput: FormInput;
  registerButton: Button;
}

export class RegistrationForm extends Block {
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

    this.children.passwordInput = new FormInput({
      for: 'password',
      label: 'Password',
      type: 'password',
      name: 'password',
    });

    this.children.repeatPasswordInput = new FormInput({
      for: 'password_repeat',
      label: 'Repeat password',
      type: 'password',
      name: 'password_repeat',
    });

    this.children.registerButton = new Button({
      buttonText: 'Register',
    })
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
