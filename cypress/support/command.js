import {
    COUNTRY_SELECTION_CONFIRM_BUTTON,
    COUNTRY_SELECTION_DROPDOWN,
    COUNTRY_SELECTION_POPUP
} from "./locators/e2e-elements";


Cypress.Commands.add("selectCountry", (countryName) => {
    cy.get(COUNTRY_SELECTION_POPUP).should('be.visible');
    cy.get(COUNTRY_SELECTION_DROPDOWN).select(countryName);
    cy.get(COUNTRY_SELECTION_CONFIRM_BUTTON).click();
});
