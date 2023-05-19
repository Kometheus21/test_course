import BasePage from "./Base.page";

class CheckBoxPage extends BasePage {

    static get url(){
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get(".rct-option-expand-all")
    }

    static get fileNames(){
        return cy.get(".rct-title");
    }

}

export default CheckBoxPage;