import { browser, by, element } from 'protractor';

export class ExampleEmojiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getEmojiElementsCount() {
    return element.all(by.css('app-home .container .card')).count();
  }
}
