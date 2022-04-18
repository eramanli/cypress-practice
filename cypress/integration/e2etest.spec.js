describe("End to end tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    context("when the user is not logged in", () => {
        it("should display the correct title", () => {
            cy.title().should("include", "Trendyol");
        });
    });
    context("when the user is logged in", () => {
        it("should display the correct title", () => {
            cy.title().should("include", "Trendyol");
        });
    });
});

