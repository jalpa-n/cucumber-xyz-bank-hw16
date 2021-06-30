$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "\r\nAs a user I want to verify xyz bank account functionalities",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3465718100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User as a bank manager should able to add customer successfully",
  "description": "",
  "id": "bank-test;user-as-a-bank-manager-should-able-to-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter First name \"Jalpa\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Last Name \"Ganatra\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Postcode \"NN18 8FW\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 159219200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 10359599600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 102866800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1164255200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1133443400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NN18 8FW",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1130320800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 97068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 12353000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 35846800,
  "status": "passed"
});
formatter.after({
  "duration": 713337700,
  "status": "passed"
});
formatter.before({
  "duration": 2603600200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User as a bank manager should able to open account successfully",
  "description": "",
  "id": "bank-test;user-as-a-bank-manager-should-able-to-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter First name \"Jalpa\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Last Name \"Ganatra\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Postcode \"NN18 8FW\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 535785100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 280842300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1131274500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1123624800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NN18 8FW",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1113100300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 90049600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4995100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 18321400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 98263700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 420854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 236661400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 100554100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4100300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 12305900,
  "status": "passed"
});
formatter.after({
  "duration": 749942500,
  "status": "passed"
});
formatter.before({
  "duration": 2471112300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to login into the account logout fro the account successfully",
  "description": "",
  "id": "bank-test;user-should-be-able-to-login-into-the-account-logout-fro-the-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Sanity"
    },
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter First name \"Jalpa\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Last Name \"Ganatra\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Postcode \"NN18 8FW\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should be able to verify \"Logout\" tab displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I should be able able to verify customer name \"Jalpa Ganatra\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should able to click logout button",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 485271000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 254811200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1120455500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1124996600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NN18 8FW",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1104809400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 82647100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4856700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 13602100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 94817000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 447102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 248276500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 87155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 5987000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 20113300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2117293500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 70814800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 501091100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 90296100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 28
    }
  ],
  "location": "BankStepdefs.iShouldBeAbleToVerifyTabDisplayed(String)"
});
formatter.result({
  "duration": 1082943900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 47
    }
  ],
  "location": "BankStepdefs.iShouldBeAbleAbleToVerifyCustomerName(String)"
});
formatter.result({
  "duration": 21090036700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Dipak Patel\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6HCANK\u0027, ip: \u0027192.168.1.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\jalpa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49677}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ec5afb7e950898652e3b6bf69b250097\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Dipak Patel\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.bank.pages.AccountPage.gettingCustomerNameText(AccountPage.java:52)\r\n\tat com.bank.cucumber.stepDefs.BankStepdefs.iShouldBeAbleAbleToVerifyCustomerName(BankStepdefs.java:113)\r\n\tat ✽.And I should be able able to verify customer name \"Jalpa Ganatra\"(src/test/java/resources/featureFile/bank.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankStepdefs.iShouldAbleToClickLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 907698500,
  "status": "passed"
});
formatter.before({
  "duration": 2496882800,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "User as customer should be able to to deposit money to the account",
  "description": "",
  "id": "bank-test;user-as-customer-should-be-able-to-to-deposit-money-to-the-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@Sanity"
    },
    {
      "line": 60,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter First name \"Jalpa\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter Last Name \"Ganatra\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I enter Postcode \"NN18 8FW\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I enter amount \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 10645208200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 86321800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1100319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1118008200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NN18 8FW",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1115010600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 87519300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4620600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 12247300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 123744700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 514034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 241340400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 90234200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 6679800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 12411400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2110141700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 78624900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 396765300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 91023100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 1115924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1142572800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 1119250900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 56041800,
  "status": "passed"
});
formatter.after({
  "duration": 773065600,
  "status": "passed"
});
formatter.before({
  "duration": 2532292500,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "User as a customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-test;user-as-a-customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I enter First name \"Jalpa\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter Last Name \"Ganatra\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I enter Postcode \"NN18 8FW\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I select \"Jalpa Ganatra\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I enter amount \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "I click on Withdraw tab",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I enter amount \"50\" in amount to be withdrawn field",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click Withdraw tab",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I should able to verify withdrawn message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 487526300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 259857700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1132931300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1126455500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NN18 8FW",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1123933900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 75866200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4856900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 21574000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 101922600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 368610200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 253619500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 75502500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 7871600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 13567500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2123699000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 85772400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa Ganatra",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 430467900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 99719100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 1105124600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1093636900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 1112348500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 41973600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnWithdrawTab()"
});
formatter.result({
  "duration": 1102949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmountInAmountToBeWithdrawnField(String)"
});
formatter.result({
  "duration": 1114713100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickWithdrawTab()"
});
formatter.result({
  "duration": 88228700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 43
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyWithdrawnMessage(String)"
});
formatter.result({
  "duration": 57133500,
  "status": "passed"
});
formatter.after({
  "duration": 773976100,
  "status": "passed"
});
});