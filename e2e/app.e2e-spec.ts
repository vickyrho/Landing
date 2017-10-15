import { WinterfellPage } from './app.po';

describe('winterfell App', function() {
  let page: WinterfellPage;

  beforeEach(() => {
    page = new WinterfellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
