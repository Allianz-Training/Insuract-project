import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display logo', async () => {
    await page.navigateTo();
    expect(await page.getLogo()).toContain('Insuract');
  });

  it('should navigate to insurance product page', async () => {
    await page.navigateTo();
    page.getInsurancePage().click();
    expect(browser.getCurrentUrl()).toContain('insurance');
  });
  // it('should navigate to login page', async () => {
  //   await page.navigateTo();
  //   page.getStarted().click();
  //   expect(browser.getCurrentUrl()).toContain('login');
  // });
  it('should be able to register login information', () => {
    page.navigateToRegistration();
    page.usernameTextBox().sendKeys('user1');
    expect(page.usernameTextBox().getText()).toContain('user1');
    page.passwordTextBox().sendKeys('userpass');
    expect(page.passwordTextBox().getText()).toContain('userpass');
  });

  it('should navigate back to Home Page', () => {
    page.navigateToRegistration();
    page.getHome().click();
    expect(browser.getCurrentUrl()).toContain('home');
  });
});
