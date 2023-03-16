export class TourList {
    static downloadBrochureButtons() {
        return cy.get('[data-cy="serp-tour--download-brochure"]')
    }

    static tourNames() {
        return cy.get('.js-ao-serp-tour__name')
    }

    static sortButton() {
        return cy.get('[name="sort"]')
    }

    static tours() {
        return cy.get('[data-cy="serp-tour"]')
    }

    static searchInput() {
        return cy.get('[data-cy="common-header--search"]')
    }

}

export class TourItem {
    static emailInput() {
        return cy.get('[data-cy="common-download-brochure--email-input"]')
    }

    static extractPriceFromTour(tourItem) {
        return tourItem.getElementsByClassName("br__price-wrapper-info-description")[1].innerHTML
    }

    static submitDownloadButton() {
        return cy.get('[data-cy="common-download-brochure--submit"]')
    }


}