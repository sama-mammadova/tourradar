import {TourList} from "../components/tour-list";
import {SearchResult} from "../components/search-result";

describe('search', () => {
    it('should search for Vienna city tours', () => {
        cy.visit('/d/europe')
        let query = 'Vienna'
        TourList.searchInput().type(`${query}{enter}`)
        cy.location('pathname').should('contain', 'search')
        SearchResult.showMoreButtons().then(seeMoreButtons => {
            for (let i = 0; i < seeMoreButtons.length; i++) {
                SearchResult.showMoreButtons().eq(0).scrollIntoView().click({force: true})
            }
        })
        SearchResult.tours().then(result=>{
            let tours = result[0]
            for (let i = 0; i < tours.length; i++) {
                SearchResult.tours().eq(i).find('[class$=-search__definition-value]').should('contain.text', 'Vienna')
            }
        })

    })
})