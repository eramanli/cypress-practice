import {
    COUNTRY_SELECTION_CONFIRM_BUTTON,
    COUNTRY_SELECTION_DROPDOWN,
    COUNTRY_SELECTION_POPUP, SELECTED_COUNTRY_CODE, SELECTED_COUNTRY_FLAG
} from "../support/locators/e2e-elements";

describe("End to end tests", () => {
    before(() => {
        cy.visit("/");
    });
  context("Country Selection", () => {
      it('should select a country', function () {
          cy.selectCountry("United Kingdom");
          cy.get(SELECTED_COUNTRY_CODE).contains('GB');
          cy.get(SELECTED_COUNTRY_FLAG).should('have.attr', 'src')
              .and('include', 'flags/gb');
      });
  });
});
