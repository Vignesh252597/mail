package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import lib.Constants;

public class Vignesh {
	public static WebDriver d;
	
	@Before
	public void setup() {
		System.setProperty(Constants.CH_KEY, Constants.CH_PATH);
	    d = new ChromeDriver();
	    
	}
	
	@After
	public void teardown() {
		d.close();
	}
}