describe("Visit home page", () => {
  const BASE_URL = Cypress.env("BASE_URL");
  const email = Cypress.env("AUTH0_EMAIL");
  const password = Cypress.env("AUTH0_PASSWORD");

  beforeEach(() => {
    cy.login(email, password);
  });

  it("should display the home page", () => {
    cy.visit(BASE_URL);
    cy.get("h1").should("contain", "Cypress Error Reproduction");
  });

  it("should contain environment variable", () => {
    cy.visit(BASE_URL);
    cy.get("p").should(
      "contain",
      "Environment Variable: ",
      Cypress.env("VITE_VAR")
    );
  });
});
