export class SearchResult {
    static showMoreButtons() {
        return cy.get('[class$=-search__definition-value-show-more]').eq(0)
    }

    static tours() {
        return cy.get('[class$=-search__tour]')
    }
}