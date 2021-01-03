import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  navigateToInsurance() {
    return browser.get('localhost:4200/insurance');
  }
  navigateToRegistration() {
    return browser.get('localhost:4200/login');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getLogo(): Promise<string> {
    return element(by.id('logo')).getText();
  }

  getStarted() {
    return element(
      by.xpath('/html/body/app-root/app-default/header/nav/ul/li[3]/button')
    );
  }
  getInsurancePage() {
    return element(
      by.xpath('/html/body/app-root/app-default/header/nav/ul/li[2]/a')
    );
  }
  getHome() {
    return element(
      by.xpath('/html/body/app-root/app-default/header/nav/ul/li[1]/a')
    );
  }
  usernameTextBox() {
    return element(
      by.xpath(
        '/html/body/app-root/app-login/section/div/div/div[1]/form/mat-form-field[1]/div/div[1]/div[3]/input'
      )
    );
  }
  passwordTextBox() {
    return element(
      by.xpath(
        '/html/body/app-root/app-login/section/div/div/div[1]/form/mat-form-field[2]/div/div[1]/div[3]/input'
      )
    );
  }
}
