import Block from '../../utils/block';
import template from './profile.hbs';
import {ProfileForm} from '../../components/profile-form/profile-form';

interface ProfileProps {
  profileForm: ProfileForm;
}

export class Profile extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.profileForm = new ProfileForm();
  }

  render(): DocumentFragment {
    return this.compile(template, {});
  }
}
