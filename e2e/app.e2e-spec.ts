import { X365R3Page } from './app.po';

describe('x365-r3 App', () => {
  let page: X365R3Page;

  beforeEach(() => {
    page = new X365R3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
