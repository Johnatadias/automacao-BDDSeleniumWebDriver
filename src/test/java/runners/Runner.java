package runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/aprendendoSelenium.feature", // diretorio para cucumber.feature
		glue = "steps", // buscar o pacote dos steps
		tags = {"~@ignore"}, // tag para executar apenas um cenário, tag ~@ignore serve para não executar o cenário que estiver com essa tag
		plugin = {"pretty", "html:target/report-html", "json:target/report-json"}, //  pretty detalhar mais o console
		monochrome = true, // retirar os caracteres especiais
		snippets = SnippetType.CAMELCASE, // deixar os metodos do cucumber no padrao camelcase
		dryRun = false, // Ele valida a sintaxe e verifica se o mapeamento de todos os passos para as classes step estão corretos, devo usar antes de exutar normal para validar todos, true para valida, false para desativar ele
		strict = false
		)
public class Runner {

	//APAGAR BANCO ANtES DA APLICAÇÃO
	/*@BeforeClass
	public static void reset() {
		WebDriver driver = new ChromeDriver();
		System.setProperty("webdriver.chrome.driver", "c:\\chromedriver.exe");
		driver.get("http://seubarriga.wcaquino.me/login");
		driver.findElement(By.id("email")).sendKeys("jhoouw_sk8board@hotmail.com");
		driver.findElement(By.id("senha")).sendKeys("oicaradeboi");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
	}*/
}
