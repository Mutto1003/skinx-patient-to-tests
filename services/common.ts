// const userLoginData = require(`../../../fixtures/userLogin`);
// const commonData = require(`../../../fixtures/common`);
const { I } = inject();

class commonPage {

  constructor() {
    //insert your locators
    // this.button = '#button'
  }
  // insert your methods here

  async getAccessToken(userLogin: string){
    const res = await I.sendGetRequest(`/login/requestOtp?phone=${userLogin}`) as unknown;
    if (res && typeof res === 'object' && 'data' in res) {
        const reference = (res as { data: any }).data.reference
        const body = {
          reference: `${reference}`,
          otp: "123124324"
        }
        const resToken = await I.sendPostRequest(`/login/verifyOtp`, body) as unknown;
        const token = (resToken as { data: any }).data.token
        const idToken = await this.retrieveToken(token)
        return idToken 
    } else {
        console.error("Unexpected response format");
    }
  }

  async retrieveToken(token: string){
    const headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    };
    const body = {
      token: `${token}`,
      returnSecureToken: true,
      tenantId: `${process.env.FIREBASE_TANANT_PATIENT}`
    }
    const retrieveTokenValuse = await I.sendPostRequest(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`, body, {headers} ) as unknown
    const idToken = (retrieveTokenValuse as { data: any }).data.idToken
    return idToken;
  }
}

// For inheritance
export default new commonPage();