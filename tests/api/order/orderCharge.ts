import getAccessToken from "../../../services/common";
const userLoginData = require(`../../../fixtures/userLogin`);
const commonData = require(`../../../fixtures/common`);
const orderData = require(`../../../fixtures/order`);

Feature('Order charge');

Before(async ({I}) => {
    const accessToken = await getAccessToken.getAccessToken(userLoginData.mobileUser001);
    commonData.request.header["Authorization"] = `Bearer ${accessToken}`;
});

Scenario('@api APISP-00001: Call the API to create an order with valid data.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    orderData.orderCharge.id = `${orderId}`

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, orderData.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(200)  
});

Scenario('@api APISP-00006: Validate mandatory field id missing.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    orderData.orderCharge.id = null

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, orderData.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(500)  
});

Scenario('@api APISP-00007: Validate mandatory field payment.paymentMethod missing.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    orderData.orderCharge.id = `${orderId}`
    orderData.orderCharge.payment.paymentMethod = null

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, orderData.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
});

Scenario('@api APISP-00008:Validate the Mandatory Field payment.paymentMethod When Input is Incorrectly Set to PROMRTPAYS.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    orderData.orderCharge.id = `${orderId}`
    orderData.orderCharge.payment.paymentMethod = 'PROMRTPAYS'

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, orderData.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
});

Scenario('@api APISP-00009: Validate the Mandatory Field payment.paymentMethod When Input is Incorrectly Set to promptpay.', async ({ I }) => {
    // Order Create
    const response = await I.sendPostRequest(commonData.endpoint.order.orderCreate, orderData.orderCreate, commonData.request.header) as unknown
    const orderId = (response as { data: any }).data.id
    orderData.orderCharge.id = `${orderId}`
    orderData.orderCharge.payment.paymentMethod = 'promptpay'

    // Order Charge
    I.sendPostRequest(commonData.endpoint.order.orderCharge, orderData.orderCharge, commonData.request.header)
    I.seeResponseCodeIs(400)  
});