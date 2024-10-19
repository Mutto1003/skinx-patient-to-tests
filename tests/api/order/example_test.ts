Feature('apiLogin');

Scenario('@api test something', async ({ I }) => {
    const res = await I.sendGetRequest('https://automationexercise.com/api/productsList')
    console.log(res)
});
