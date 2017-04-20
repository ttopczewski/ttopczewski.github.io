import { MypagePage } from './app.po';

describe('mypage App', function() {
  let page: MypagePage;

  beforeEach(() => {
    page = new MypagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
