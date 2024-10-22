import getAccessToken from "../../../services/common";
const userLoginData = require(`../../../fixtures/userLogin`);
const commonData = require(`../../../fixtures/common`);
const orderData = require(`../../../fixtures/order`);
let bodyRequest;
let isInitialized = false;

Feature('Order charge');

Before(async ({I}) => {
    if (!isInitialized) {
        const accessToken = await getAccessToken.getAccessToken(userLoginData.mobileUser001);
        commonData.request.header["Authorization"] = `Bearer ${accessToken}`;
        isInitialized = true;
    }
});

Scenario('APISP-00001: Call the API to create an order with valid data.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(200)  
}).tag('api');

Scenario('APISP-00002: Call the API with the minimum possible amount value.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(200)  
}).tag('api');

Scenario('APISP-00003: Call the API with the maximum possible amount value.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(200)  
}).tag('api');

Scenario('APISP-00004: Call the API with the maximum possible amount value is 999999999.99.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `12345`).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(500)  
}).tag('api');

Scenario.skip('APISP-00005: Call the API with the minimum possible amount value is 10.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(500)  
}).tag('api');

Scenario('APISP-00006: Validate mandatory field id missing.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, null).replace(/{{PROMPTPAY}}/g,'PROMPTPAY'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
}).tag('api');

Scenario('APISP-00007: Validate mandatory field payment.paymentMethod missing.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g,null))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
}).tag('api');

Scenario('APISP-00008: Validate the Mandatory Field payment.paymentMethod When Input is Incorrectly Set to PROMRTPAYS.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g, 'PROMRTPAYS'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
}).tag('api');

Scenario('APISP-00009: Validate the Mandatory Field payment.paymentMethod When Input is Incorrectly Set to promptpay.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    bodyRequest = await JSON.parse(JSON.stringify(orderData).replace(/{{ORDERID}}/g, `${orderId}`).replace(/{{PROMPTPAY}}/g, 'promptpay'))

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, bodyRequest.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
}).tag('api');