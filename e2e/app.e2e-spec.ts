import { LetsgoPage } from './app.po';

describe('letsgo App', () => {
  let page: LetsgoPage;

  beforeEach(() => {
    page = new LetsgoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
