import { ExampleEmojiPage } from './app.po';

describe('example-emoji App', () => {
  let page: ExampleEmojiPage;

  beforeEach(() => {
    page = new ExampleEmojiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
