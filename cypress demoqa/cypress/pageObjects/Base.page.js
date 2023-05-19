class BasePage{

    static get url(){
        return"";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get successText(){
        return cy.get(".text-success");
    }
}

export default BasePage;