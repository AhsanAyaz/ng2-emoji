import { ExampleEmojiPage } from './app.po';

describe('example-emoji App', () => {
  let page: ExampleEmojiPage;

  beforeEach(() => {
    page = new ExampleEmojiPage();
  });

  it('should show 869 emoji cards', () => {
    page.navigateTo();
    expect(page.getEmojiElementsCount()).toBe(869);
  });
});
