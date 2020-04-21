import { restartApp } from '../../helpers/utils';

describe('Login', () => {
  beforeEach(() => {
    restartApp();
  });

  it('should always pass', () => {
    expect(true).toBeTrue();
  });

  it('should open', () => {
    $('//*[@accessibilityId=\'Navigate up\']').click();
    expect($('#com.hilton.android.hhonors.dev.debug:id/search_bar').isDisplayed()).toBeTrue();
  });
});
