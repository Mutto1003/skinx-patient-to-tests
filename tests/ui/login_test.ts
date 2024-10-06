import login from "../../pages/login";

Feature('mobile');

Scenario('@app test something', async ({ I }) => {
    I.wait(5)
    I.seeElement({xpath: "//*[@resource-id='com.android.permissioncontroller:id/permission_allow_button']"})
    I.tap({xpath: "//*[@resource-id='com.android.permissioncontroller:id/permission_allow_button']"})
    await login.contactCall()
    I.wait(3);
});
