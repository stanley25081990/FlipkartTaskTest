package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(tags = {"@TaskTest"}, format = {"pretty","html: report"}, monochrome = true, glue = {"testCases"}, features="src\\test\\resources\\feature\\task.feature")
	public class Runner {

	}

