import {TourList, TourItem} from "../components/tour-list";
import {priceAsNumber, isSorted} from "../support/util"

describe('Sort', () => {
    it('should sort by price ascending', () => {
        cy.visit('/d/europe')
        TourList.sortButton().select("Total price: Lowest first", {force: true})
        cy.intercept('/serp/load/230').as('tourListRequest')
        cy.wait('@tourListRequest')
        cy.location('hash').should('contain', 'sort')
        TourList.tours().then(result => {
            let tours = result[0].toArray()
            let prices = tours.map(TourItem.extractPriceFromTour).map(priceAsNumber)
            let priceOrder = "order of prices: " + prices.join(",")
            let sorted = isSorted(prices)
            expect(sorted, priceOrder).to.be.true
        })
    })
})





