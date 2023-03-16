import {TourList, TourItem} from "../components/tour-list";
import {randomInt} from "../support/util";

beforeEach(() => {
    cy.visit('/d/europe')
})

describe('download brochure', () => {
    it('should show alert for invalid email format', () => {
        TourList.downloadBrochureButtons().eq(0).click({force: true})
        TourItem.emailInput().type('invalidemail')
        TourItem.submitDownloadButton().click({force: true})
        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('Please enter a valid email address.')
        })
    })

    it('should send brochure to email', () => {
        TourList.tourNames().then(result => {
            let tours = result[0]
            // select a random tour
            let tourNumber = randomInt(0, tours.length)
            // capture selected tour name
            cy.wrap(tours).eq(tourNumber).then(result => result[0][0].innerText).as('selectedTourName')
            TourList.downloadBrochureButtons().eq(tourNumber).click()

            cy.createInbox().then((inbox) => {
                TourItem.emailInput().type(inbox.emailAddress)
                TourItem.submitDownloadButton().click()
                cy.waitForLatestEmail(inbox.id).then((email) => {
                    cy.get('@selectedTourName').then(tourName => {
                        expect(email.from).to.be.eq('no-reply@tourradar.com')
                        expect(email.body).to.contain('Your brochure is ready!')
                        expect('Brochure for ' + tourName).to.be.eq(email.subject)
                    })
                });
            })

        })

    })
})