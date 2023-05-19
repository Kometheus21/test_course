import BasePage from "./Base.page";

class HomePage extends BasePage{
    static get url(){
        return "/";
    }

    static get dismissButton(){
        return cy.get(".cc-dismiss");
    }

    static get meWantItButton(){
        return cy.get(".close-dialog");
    }

    static get accountButton(){
        return cy.get("#navbarAccount");
    }

    static get loginButton(){
        return cy.get("#navbarLoginButton");
    }

    static get searchButton(){
        return cy.get("#searchQuery");
    }

    static get searchInputField(){
        return cy.get(".mat-input-element");
    }

    static get itemsPerPageMenu(){
        return cy.get("mat-select[aria-label='Items per page:']");
    }

    static get menuOptions(){
        return cy.get(".mat-option-text");
    }

    static get product(){
        return cy.get(".product");
    }
}

export default HomePage;