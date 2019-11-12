#Create features folder under maven project
#Add .feature files
#add pageObjects package
#follow page object model to add webelements and
Feature: Customers

  Background: Below are the common steps for each scenario
    Given User launch chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then User can view Dashboard

  @Sanity
  Scenario: Add new Customer
    When User click on customers Menu
    And click on customers Menu item
    And click on Add new button
    Then User can view Add new customer page
    When User enter customer info
    And click on Save button
    Then User can view confirmation message "The new customer has been added successfully."
    And close Browser

  @Regression
  Scenario: Search Customer by EmailID
    When User click on customers Menu
    And click on customers Menu item
    And Enter customer EMail
    When Click on search button
    Then User should find Email in the Search Table
    And close Browser

  @Regression
  Scenario: Search Customer by Name
    When User click on customers Menu
    And click on customers Menu item
    And Enter customer FirstName
    And Enter customer LastName
    When Click on search button
    Then User should find Name in the Search Table
    And close Browser
