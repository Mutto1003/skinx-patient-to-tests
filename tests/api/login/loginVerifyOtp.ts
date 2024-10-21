import apiCall from "../../../services/apiLoginVerifyOtp";
import getAccessToken from "../../../services/common"
const userLoginData = require(`../../../fixtures/userLogin`);

Feature('login verify otp');

Scenario('@api test something', async ({ I }) => {  
    getAccessToken.getAccessToken(userLoginData.mobileUser001)
});