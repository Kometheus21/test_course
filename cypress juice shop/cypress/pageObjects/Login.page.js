import BasePage from "./Base.page";

class LoginPage extends BasePage{
    static get url(){
        return "/#/login";
    }

    static get notYetCustomerLink(){
        return cy.get("#newCustomerLink");
    }

    static get successMessage(){
        return cy.get(".mat-simple-snack-bar-content");
    }

    static get emailField(){
        return cy.get("#email");
    }

    static get passwordField(){
        return cy.get("#password");
    }

    static get loginButton(){
        return cy.get("#loginButton");
    }

    static logIn(email, password){
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default LoginPage;