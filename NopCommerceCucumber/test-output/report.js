$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Create features folder under maven project"
    },
    {
      "line": 2,
      "value": "#Add .feature files"
    },
    {
      "line": 3,
      "value": "#add pageObjects package"
    },
    {
      "line": 4,
      "value": "#follow page object model to add webelements and"
    }
  ],
  "line": 5,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9334334039,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 409925586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2759801014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 661764398,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 10328101966,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 22711907,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add new Customer",
  "description": "",
  "id": "customers;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on customers Menu item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3199612306,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_item()"
});
formatter.result({
  "duration": 8971274005,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 8675574633,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 18604674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 9912812143,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_button()"
});
formatter.result({
  "duration": 5840232977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 612953402,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "duration": 954137344,
  "status": "passed"
});
formatter.before({
  "duration": 3272014539,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 582115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1424792494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 620325483,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 9586591991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 14297109,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search Customer by EmailID",
  "description": "",
  "id": "customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "click on customers Menu item",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter customer EMail",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should find Email in the Search Table",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3238040482,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_item()"
});
formatter.result({
  "duration": 7158066657,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_EMail()"
});
formatter.result({
  "duration": 1091513895,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3286657714,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_find_Email_in_the_Search_Table()"
});
formatter.result({
  "duration": 200250251,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "duration": 1096715158,
  "status": "passed"
});
formatter.before({
  "duration": 3647283377,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 1319815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2467129211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 638706015,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 11543840239,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 9045763,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search Customer by Name",
  "description": "",
  "id": "customers;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "click on customers Menu item",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Enter customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter customer LastName",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User should find Name in the Search Table",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3191135522,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_item()"
});
formatter.result({
  "duration": 4832056690,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_FirstName()"
});
formatter.result({
  "duration": 648858124,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_LastName()"
});
formatter.result({
  "duration": 335832840,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3281858760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_find_Name_in_the_Search_Table()"
});
formatter.result({
  "duration": 109737199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "duration": 821757616,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3232285021,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 303373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2563586974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 731978159,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 17749108663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 105601231,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Log_out_Link()"
});
formatter.result({
  "duration": 3355691647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 61639272,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "duration": 929658157,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Successful login with multiple credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-multiple-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login;successful-login-with-multiple-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 28,
      "id": "login;successful-login-with-multiple-credentials;;2"
    },
    {
      "cells": [
        "admin123@yourstore.com",
        "admin123"
      ],
      "line": 29,
      "id": "login;successful-login-with-multiple-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3611342118,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful login with multiple credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 926129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3756616626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1039611699,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 10751366512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 51186663,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Log_out_Link()"
});
formatter.result({
  "duration": 1656872255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 12494936,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "duration": 683279645,
  "status": "passed"
});
formatter.before({
  "duration": 3085235023,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successful login with multiple credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin123@yourstore.com\" and Password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 276689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1936966609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 63
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 355282360,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clcik_on_Login()"
});
formatter.result({
  "duration": 4031103715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 2107715398,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:86)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Log_out_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});