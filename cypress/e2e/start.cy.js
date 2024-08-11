describe("Visit home page", () => {
  const BASE_URL = Cypress.env("BASE_URL");
  it("should display the home page", () => {
    cy.visit(BASE_URL);
    cy.get("h1").should("contain", "Vite + React");
  });

  it("should contain environment variable", () => {
    cy.visit(BASE_URL);
    cy.get("h1").should("contain", "Vite + React");
    cy.get("p").should(
      "contain",
      "Environment Variable: ",
      Cypress.env("VITE_VAR")
    );
  });
});
