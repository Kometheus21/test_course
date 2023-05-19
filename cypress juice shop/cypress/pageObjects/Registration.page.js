import BasePage from "./Base.page";

class RegistrationPage extends BasePage{
    static get url(){
        return "/#/register";
    }

    static get emailField(){
        return cy.get("#emailControl");
    }

    static get passwordField(){
        return cy.get("#passwordControl");
    }

    static get repeatPasswordField(){
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestionField(){
        return cy.get("#mat-select-2");
    }

    static get securityQuestionFieldOption(){
        return cy.get("#mat-option-3");
    }

    static get securityQuestionFieldAnswer(){
        return cy.get("#securityAnswerControl");
    }

    static get registerButton(){
        return cy.get("#registerButton");
    }
}

export default RegistrationPage;