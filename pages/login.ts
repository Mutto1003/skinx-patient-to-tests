const { I } = inject();

class loginPage {

  contactSupport: string;

  constructor() {
    //insert your locators
    // this.button = '#button'
    this.contactSupport = '~contact-support'
  }
  // insert your methods here
  async contactCall(){
    I.seeElement(this.contactSupport); // ตรวจสอบว่ามี element ที่มี accessibilityId เท่ากับ 'contact-support'
    I.tap(this.contactSupport)
  }
}

// For inheritance
export default new loginPage();
// module.exports = new loginPage();
// export = loginPage;