/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import PaginationPage from '../pages/PaginationPage';

const paginationPage = new PaginationPage;


Given(/^the user is on "([^"]*)"$/, function () {
	cy.visit(Cypress.env('baseURL'))
});

Then(/^the user should see the “Pagination” heading$/, () => {
	paginationPage.getPaginationHeading().should('have.text', 'Pagination')
});

Then(/^the user should see the “World City Populations 2022” heading$/, () => {
	paginationPage.getSubHeading().should('have.text', 'World City Populations 2022')
});

Then(/^the user should see the "([^"]*)" paragraph$/, () => {
	paginationPage.getParagraph().should('have.text', 'What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:')
});

Then(/^the user should see the “Previous” button is disabled$/, () => {
	paginationPage.getPreviousButton().should('be.disabled')
});

Then(/^the user should see the “Next” button is enabled$/, () => {
	paginationPage.getNextButton().should('be.enabled')
});

When(/^the user clicks on the “Next” button$/, () => {
	paginationPage.clickOnNextButton()
});

Then(/^the user should see the “Previous” button is enabled$/, () => {
	paginationPage.getPreviousButton().should('be.enabled')
});

When(/^the user clicks on the “Next” button till it becomes disabled$/, () => {
	paginationPage.clickNextUntilDisabled();
	}); 

Then(/^the user should see the “Next” button is disabled$/, () => {
		paginationPage.getNextButton().should('be.disabled')
	});

	
Then(/^the user should see “Tokyo” City with the info below and an image$/, (dataTable) => {

	const city = dataTable.rawTable.flat()

	paginationPage.getCitiesInfo().each(($city, index) => {
		cy.wrap($city).should('have.text', city[index])
		})
	paginationPage.getCityImage().should('be.visible')
	  });
	
Then(/^the user should see “Delhi” City with the info below and an image$/, (dataTable) => {
	
	const city = dataTable.rawTable.flat()

	paginationPage.getCitiesInfo().each(($city, index) => {
		cy.wrap($city).should('have.text', city[index])
		})
	paginationPage.getCityImage().should('be.visible')
	  });

Then(/^the user should see “Shangai“ City with the info below and an image$/, (dataTable) => {
	const city = dataTable.rawTable.flat()

	paginationPage.getCitiesInfo().each(($city, index) => {
		cy.wrap($city).should('have.text', city[index])
		})
	paginationPage.getCityImage().should('be.visible')
	  });
		
Then(/^the user should see “Sao Paulo“ City with the info below and an image$/, (dataTable) => {
	const city = dataTable.rawTable.flat()

	paginationPage.getCitiesInfo().each(($city, index) => {
		cy.wrap($city).should('have.text', city[index])
		})
	paginationPage.getCityImage().should('be.visible')
	  });


Then(/^the user should see “Mexico City” City with the info below and an image$/, (dataTable) => {
	const city = dataTable.rawTable.flat()

	paginationPage.getCitiesInfo().each(($city, index) => {
		cy.wrap($city).should('have.text', city[index])
		})
	paginationPage.getCityImage().should('be.visible')
	  });
	
		