Feature('apiLogin');

Scenario('@api test something', async ({ I }) => {
    const res = await I.sendGetRequest('/api/productsList')
    console.log(res)
});
