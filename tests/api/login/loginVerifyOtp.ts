import apiCall from "../../../services/apiLoginVerifyOtp";

Feature('login verify otp');

Scenario('@api test something', async ({ I }) => {  
    apiCall.verifyOtp('0995033561')
    // I.sendGetRequest('/login/requestOtp?phone=0995033561');
    // I.seeResponseCodeIs(200);
});