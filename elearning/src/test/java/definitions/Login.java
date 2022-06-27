package definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Vignesh;
import lib.Constants;

public class Login {
	private WebDriver v = Vignesh.d;
	@Given("user is on homepage")
	public void user_is_on_homepage() {
		v.get(Constants.URL_ELEARN);
	}
	
	@When("user provides invalid credentials {string} {string}")
	public void user_provides_invalid_credentials(String string, String string2) {
	    v.findElement(By.name("login")).sendKeys("abcd0");
	    v.findElement(By.name("password")).sendKeys("pass123");
	}
	
	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		 v.findElement(By.name("submitAuth")).click();
	}
	
	@Then("validation messege appears")
	public void validation_messege_appears() {
	     Assert.assertTrue(v.findElement(By.cssSelector("div.alert.alert-danger")).isDisplayed());
	}
	
	@When("user provides valid credentials {string} {string}")
	public void user_provides_valid_credentials(String string, String string2) {
		 v.findElement(By.name("login")).sendKeys("new0");
		 v.findElement(By.name("password")).sendKeys("pass123");
	}
	
	@Then("user navigates to profile {string} homepage")
	public void user_navigates_to_profile_homepage(String b) {
		Assert.assertTrue(
			v.findElement(By.xpath("//strong[contains(text(), '"+b+"')]"))
			.isDisplayed()
		);
	}
	
}
