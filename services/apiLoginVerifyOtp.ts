const { I } = inject();

class apiLoginVerifyOtpPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }
  // insert your methods here
  async verifyOtp(phoneNumber){
    I.sendGetRequest(`/login/requestOtp?phone=${phoneNumber}`);
    I.seeResponseCodeIs(200);
  }
}

// For inheritance
export default new apiLoginVerifyOtpPage();