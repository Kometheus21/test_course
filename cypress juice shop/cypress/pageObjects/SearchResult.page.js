import HomePage from "./Home.page";

class SearchResultsPage extends HomePage{
    static get url(){
        return "/#/search";
    }

    static get header(){
        return cy.get("h1");
    }

    static get closeButton(){
        return cy.get(".close-dialog");
    }

    static get itemReview(){
        return cy.get(".mat-expansion-panel");
    }

    static get reviewText(){
        return cy.get(".review-text");
    }
}

export default SearchResultsPage