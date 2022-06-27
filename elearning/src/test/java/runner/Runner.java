package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
	features = "src/test/java/features",
    glue ={"definitions", "hooks"},
	monochrome=true,
	dryRun=false,
	//tags= {"@f0p"},
	plugin = {
		"pretty",
		"html:reports/htmlreport",
		"json:reports/jsonreport.json",
		"junit:reports/xmlreport.xml"
	}
)

public class Runner {}