class PaginationPage {
  /* Locators */

  getPaginationHeading() {
      return cy.get('.is-size-3')
}
  getSubHeading() {
      return cy.get('#sub_heading')
  }
  getParagraph() {
      return cy.get('#content')
  }
  getPreviousButton() {
      return cy.get('#previous')
  }
  getNextButton() {
      return cy.get('#next')
  }

  getCitiesInfo() {
      return cy.get('.Pagination_pagBodyData__vG6oj > p')
  }
  getCityImage() {
      return cy.get('.city_image')
  }

   /* Methods */

   clickOnNextButton() {
      this.getNextButton().click()
   }

   clickNextUntilDisabled = () => {
  this.getNextButton().then(($nextButton) => {
    if (!$nextButton.prop('disabled')) {
    this.clickOnNextButton();
    this.clickNextUntilDisabled();
    }
  });
  };


}



export default PaginationPage;