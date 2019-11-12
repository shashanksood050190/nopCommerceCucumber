
Feature: Login

@Sanity
  Scenario: Successful login with valid credentials
    Given User launch chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks on Log out Link
    Then Page Title should be "Your store. Login"
    And close Browser

@Regression
  Scenario Outline: Successful login with multiple credentials
    Given User launch chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks on Log out Link
    Then Page Title should be "Your store. Login"
    And close Browser

    Examples: 
      | email                  | password |
      | admin@yourstore.com    | admin    |
      | admin123@yourstore.com | admin123 |
