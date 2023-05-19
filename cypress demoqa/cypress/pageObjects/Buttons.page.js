import BasePage from "./Base.page";

class ButtonsPage extends BasePage {

    static get url(){
        return "/buttons";
    }

    static get doubleCLickButton(){
        return cy.get("#doubleClickBtn");
    }

    static get doubleClickMessage(){
        return cy.get("#doubleClickMessage");
    }

    static get rightClickButton(){
        return cy.get("#rightClickBtn");
    }

    static get rightClickMessage(){
        return cy.get("#rightClickMessage");
    }

    static get dynamicButton(){
        return cy.get(".btn-primary").eq(2);
    }

    static get dynamicMessage(){
        return cy.get("#dynamicClickMessage");
    }

}

export default ButtonsPage;