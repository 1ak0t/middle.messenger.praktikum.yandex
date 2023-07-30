import {Authorization} from './pages/authorization/authorization';
import {Registration} from './pages/registration/registration';
import {Profile} from './pages/profile/profile';
import {Error404} from './pages/error404/error404';
import {Error500} from './pages/error500/error500';
import {Chat} from './pages/chat/chat';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector("#app")!;
  const rootReg = document.querySelector("#reg-app")!;
  const rootProfile = document.querySelector("#profile-app")!;
  const rootError404 = document.querySelector("#error404-app")!;
  const rootError500 = document.querySelector("#error500-app")!;
  const rootChat = document.querySelector("#chat-app")!;

  const authorizationPage = new Authorization();
  const registrationPage = new Registration();
  const profilePage = new Profile();
  const error404Page = new Error404();
  const error500Page = new Error500();
  const chatPage = new Chat();

  if (root) {
    root.append(authorizationPage.getContent()!);
  }

  if (rootReg) {
    rootReg.append(registrationPage.getContent()!);
  }

  if (rootProfile) {
    rootProfile.append(profilePage.getContent()!);
  }

  if (rootError404) {
    rootError404.append(error404Page.getContent()!);
  }

  if (rootError500) {
    rootError500.append(error500Page.getContent()!);
  }

  if (rootChat) {
    rootChat.append(chatPage.getContent()!);
  }
})
