package stepDefinitions;

import java.io.FileInputStream;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass {

	@Before
	public void setup() throws Exception {

		logger = Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("Log4j.properties");

		// reading properties
		configprop = new Properties();
		FileInputStream configPropFile = new FileInputStream("config.properties");
		configprop.load(configPropFile);

		String br = configprop.getProperty("browser");
		if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + configprop.getProperty("chromepath"));
			driver = new ChromeDriver();
		} else if (br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver",
					System.getProperty("user.dir") + configprop.getProperty("chromepath"));
			driver = new FirefoxDriver();
		}
		if (br.equals("ie")) {
			System.setProperty("webdriver.ie.driver",
					System.getProperty("user.dir") + configprop.getProperty("iepath"));
			driver = new InternetExplorerDriver();
		}

		logger.info("***launching browser***********");

	}

	@Given("^User launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable {

		lp = new LoginPage(driver);
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		logger.info("******opening browser***********");
		driver.get(url);

	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {
		logger.info("******providing  login details***********");
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("^Click on Login$")
	public void clcik_on_Login() throws Throwable {
		logger.info("******started login***********");
		lp.clickLogin();
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws Throwable {
		if (driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			logger.info("******Login failed***********");
			Assert.assertTrue(false);
		} else {
			Assert.assertEquals(title, driver.getTitle());
			logger.info("******Login passed***********");
		}

	}

	@When("^User clicks on Log out Link$")
	public void user_clicks_on_Log_out_Link() throws Throwable {
		logger.info("******Click on logout link ***********");
		lp.clickLogout();
	}

	@Then("^close Browser$")
	public void close_Browser() throws Throwable {
		logger.info("******closing browser ***********");
		driver.quit();
	}

	// customer feature step definition.....................
	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		addCust = new AddCustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());
	}

	@When("^User click on customers Menu$")
	public void user_click_on_customers_Menu() throws Throwable {

		Thread.sleep(3000);

		addCust.clickOnCustomersMenu();
	}

	@When("^click on customers Menu item$")
	public void click_on_customers_Menu_item() throws Throwable {
		Thread.sleep(2000);
		addCust.clickOnCustomersMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() throws Throwable {
		addCust.clickOnAddNew();
		Thread.sleep(2000);
	}

	@Then("^User can view Add new customer page$")
	public void user_can_view_Add_new_customer_page() throws Throwable {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());

	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws Throwable {
		logger.info("******adding new customer ***********");
		logger.info("******providing customer details ***********");
		String email = BaseClass.randomString() + "@gmail.com";
		addCust.setEmail(email);

		addCust.setPassword("test1234");

		addCust.setCustomerRoles("Guests");
		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Shashank");
		addCust.setLastName("Sood");
		addCust.setDob("05/01/1990");
		addCust.setCompanyName("FIL");
		addCust.setAdminContent("This is just for Automation Testing..... ");
	}

	@When("^click on Save button$")
	public void click_on_Save_button() throws Throwable {
		logger.info("******saving customer data  ***********");
		addCust.clickOnSave();

	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String message) throws Throwable {

		Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains(message));
	}

	// searching customer using email id

	@When("^Enter customer EMail$")
	public void enter_customer_EMail() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		searchCust = new SearchCustomerPage(driver);
		searchCust.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		searchCust.clickSearch();
		Thread.sleep(3000);
	}

	@Then("^User should find Email in the Search Table$")
	public void user_should_find_Email_in_the_Search_Table() throws Throwable {
		logger.info("******searching a customer by email id  ***********");
		boolean status = searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
	}

	@When("^Enter customer FirstName$")
	public void enter_customer_FirstName() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		searchCust = new SearchCustomerPage(driver);
		searchCust.setFirstName("Victoria");
	}

	@When("^Enter customer LastName$")
	public void enter_customer_LastName() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		searchCust.setLastName("Terces");
	}

	@Then("^User should find Name in the Search Table$")
	public void user_should_find_Name_in_the_Search_Table() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		logger.info("******searching a customer by name ***********");
		boolean status = searchCust.searchCustomerByName("Victoria", "Terces");
		Assert.assertEquals(true, status);
	}

}
