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
    expect(browser.getCurrentUrl()).toBe(page.navigateToInsurance());
  });
});
