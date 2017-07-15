import { ZxcAppNgPage } from './app.po';

describe('zxc-app-ng App', () => {
  let page: ZxcAppNgPage;

  beforeEach(() => {
    page = new ZxcAppNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
