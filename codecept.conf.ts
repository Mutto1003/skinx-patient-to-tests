import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
require('dotenv').config({ path: `./env/.env.${process.env.NODE_ENV}` });

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  plugins: {
    allure: {
      outputDir: 'output/allure-results',
      disableWebdriverLogs: true,
      enableScreenshots: true,
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
  },
  output: './output',
  helpers: {
    // REST: {
    //   endpoint: 'http://localhost:3000/api'
    // },
    // JSONResponse: {}
    ...(process.env.TEST_TYPE === 'api' ? {
      REST: {
        endpoint: process.env.BASE_URL,
        defaultHeaders: {
          // use Bearer Authorization
          // 'Authorization': 'Bearer 11111',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': '(dart:io)',
          'app-platform': 'ios',
          'app-version': '3.0.0',
          'app-device': '1234',
        },
        onRequest: (request) => {
          request.headers['Content-Type'] = 'application/json';
        },
      },
      JSONResponse: {}
    } : {
      Appium: {
        app: '/Users/mutto/SkinX/api-test/app/app-alpha-release.apk',
        platform: 'Android',
        device: 'emulator-5556',
        desiredCapabilities: {
          platformName: 'Android',
          deviceName: 'emulator-5556',
          platformVersion: "14",
          appActivity: 'com.scb10x.skinx.MainActivity',
          appPackage: 'com.samawat.skinx.alpha',
        },
        appiumV2: true,
      },
    }),
  },
  include: {
    I: './steps_file',
    loginPage: "./pages/login.ts",
    registerPage: "./pages/register.ts",
    examplePage: "./services/example.ts",

    login_verify_otpPage: "./services/login_verify_otp.ts",

    apiLoginVerifyOtpPage: "./services/apiLoginVerifyOtp.ts",

    commonPage: "./services/common.ts",
  },
  name: 'skinx-patient-to-tests'
}