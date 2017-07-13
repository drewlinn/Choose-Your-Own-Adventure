import { ChooseYourOwnAdventurePage } from './app.po';

describe('choose-your-own-adventure App', () => {
  let page: ChooseYourOwnAdventurePage;

  beforeEach(() => {
    page = new ChooseYourOwnAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
