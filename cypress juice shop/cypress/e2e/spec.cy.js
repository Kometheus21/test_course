import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import RegistrationPage from "../pageObjects/Registration.page";
import SearchResultsPage from "../pageObjects/SearchResult.page";

describe('Juice-Shop scenarios', () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.notYetCustomerLink.click();
      RegistrationPage.emailField.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
      RegistrationPage.passwordField.type("password");
      RegistrationPage.repeatPasswordField.type("password");
      RegistrationPage.securityQuestionField.click();
      RegistrationPage.securityQuestionFieldOption.click();
      RegistrationPage.securityQuestionFieldAnswer.type("abc");
      RegistrationPage.registerButton.click();
      LoginPage.successMessage.should("have.text", "Registration completed successfully. You can now log in.");
    });
  });

  context("With login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.logIn("demo", "demo");
    });

    it("Search for lemon", () =>{
      HomePage.searchButton.click();
      HomePage.searchInputField.type("lemon{enter}");
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)")
    });

    it("Search for 500ml", () =>{
      HomePage.searchButton.click();
      HomePage.searchInputField.type("500ml{enter}");
      SearchResultsPage.product.contains("Eggfruit Juice").click();
      SearchResultsPage.header.should("have.text", "Eggfruit Juice (500ml)");
      SearchResultsPage.closeButton.click();
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)");
      SearchResultsPage.closeButton.click();
      SearchResultsPage.product.contains("Strawberry Juice").click();
      SearchResultsPage.header.should("have.text", "Strawberry Juice (500ml)");
    });

    it("Filter product amount", () =>{
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("12").click();
      HomePage.product.should("have.length", "12");
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("24").click();
      HomePage.product.should("have.length", "24");
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("36").click();
      HomePage.product.should("have.length", "35");
    });

    it.only("Validate item review", () =>{
      HomePage.searchButton.click();
      HomePage.searchInputField.type("king{enter}");
      SearchResultsPage.product.contains("King of the Hill").click();
      cy.wait(200)
      SearchResultsPage.itemReview.click();
      SearchResultsPage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });
  });
});