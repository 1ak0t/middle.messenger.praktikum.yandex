import Block from '../../utils/block';
import template from './authorization.hbs';
import {AuthorizationForm} from '../../components/authorization-form/authorization-form';

interface AuthorizationProps {
  authorizationForm: AuthorizationForm;
}

export class Authorization extends Block {
  constructor() {
    super('div');
  }

  init() {
    this.children.authorizationForm = new AuthorizationForm();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
