import HomePage from "../../pageObjects/Home.page";
import LoginPage from "../../pageObjects/Login.page";

describe("Saucedemo", () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it("1. Login scenario - Positive case", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.should('be.visible');
        LoginPage.loginButton.click();
        LoginPage.loginButton.should('not.exist');
    });

    it("2. Login scenario - Negative case", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("xxxx");
        LoginPage.loginButton.click();
        LoginPage.errorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("3. Logout scenario", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.click();
        HomePage.sideBar.invoke('attr', 'aria-hidden').should('eq', "true");
        HomePage.stackIcon.click();
        HomePage.sideBar.invoke('attr', 'aria-hidden').should('eq', "false");
        HomePage.logoutButton.click();
        LoginPage.loginButton.should('be.visible');
    });

    it("4. Add items to cart", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.click();
        HomePage.addToCartSauceLabsBackpack.click();
        HomePage.addToCartBoldTShirt.click();
        HomePage.addToCartOnesie.click();
        HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "3");
    });

    it("5. Add and remove item", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.addToCartSauceLabsBackpack.click();
        HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "1");
        HomePage.removeSauceLabsBackpack.click();
        HomePage.cartBadgeIcon.should("not.exist");
    });

    it.only("6. Open specific item, and validate title", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.itemNames.contains("Backpack").click();
        HomePage.itemName.should("have.text", "Sauce Labs Backpack")
    });
});

