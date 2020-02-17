package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class FlipkartSecondWindow extends FlipkartFirstWindow {
	
	
	static String dataprice;

	public static void switchToChild() {
			System.out.println("The Child window page has reached");
	
	String str = wd.getCurrentUrl();
	System.out.println(str);

	}
	
	public static void getChildTitle() {
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				
		WebElement input = wd.findElement(By.xpath("//span[@class='_35KyD6']"));
		String data2 = input.getText();
		System.out.println(data2);
		WebElement input1 = wd.findElement(By.xpath("//div[@class='_1vC4OE _3qQ9m1']"));
		dataprice = input1.getText();
		System.out.println(dataprice + "");
		
	}
	
	public static void compareChildAndSource() {
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println(data1);
		System.out.println(dataprice);
		if(data1.equals(dataprice)) {
			System.out.println("price value is perfectly matched");
			WebElement input1 = wd.findElement(By.xpath("//button[@class='_2AkmmA _2Npkh4 _2MWPVK']"));
			input1.click();
	
		}
		
	}
	
	public static void getFinalNameAndPrice() {
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement input2 = wd.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/a"));
		String data2 = input2.getText();
		System.out.println(data2);
		WebElement input3 = wd.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[2]/div/div[1]/div[1]/span"));
		String data3 = input3.getText();
		System.out.println(data3);

	}
	
	public static void clickOnPlaceOrder() {
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement input4 = wd.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[3]/div/form/button/span"));
		input4.click();
		wd.close();
		wd.switchTo().window(parentid);
		wd.close();
		
		
	}

}
