import { restartApp } from '../../helpers/utils';

describe('Login', () => {
  beforeEach(() => {
    restartApp();
  });

  it('should always pass', () => {
    expect(true).toBeTrue();
  });

  it('should open', () => {
    //Finding an element by accessibility Id
    cont element = $('~Navigate up');
    element.click();
    expect($('#com.hilton.android.hhonors.dev.debug:id/search_bar').isDisplayed()).toBeTrue();
  });
});
