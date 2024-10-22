Feature('apiLogin');

Scenario('@api test something', async ({ I }) => {
    await I.sendGetRequest('https://automationexercise.com/api/productsList')
    // console.log(res)
});
