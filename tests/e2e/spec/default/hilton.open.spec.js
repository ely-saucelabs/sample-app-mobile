import LoginScreen from '../../screenObjects/login';
import InventoryListScreen from '../../screenObjects/inventoryList';
import { restartApp } from '../../helpers/utils';
import { LOGIN_USERS } from '../../helpers/e2eConstants';

describe('Login', () => {
  beforeEach(() => {
    restartApp();
  });

  it('should always pass', () => {
    expect(true).toBeTrue();
  });

  it('should open', () => {
    browser.$('//*[@accessibilityId=\'Navigate up\']').click();
    expect($('#com.hilton.android.hhonors.dev.debug:id/search_bar').isDisplayed()).toBeTrue();
  });
});
