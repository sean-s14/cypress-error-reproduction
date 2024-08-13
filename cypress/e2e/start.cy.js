describe("Visit home page", () => {
  const BASE_URL = Cypress.env("BASE_URL");
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

  it("should login and display profile", () => {
    // This is to ensure the access token is available
    cy.intercept("POST", "**/oauth/token").as("authRequest");

    cy.visit(BASE_URL);
    cy.get("#login").click();

    const email = Cypress.env("AUTH0_EMAIL");
    const password = Cypress.env("AUTH0_PASSWORD");

    cy.origin(
      Cypress.env("VITE_AUTH0_DOMAIN"),
      { args: { email, password } },
      ({ email, password }) => {
        cy.get("#username").type(email);
        cy.get("#password").type(password);
        cy.get('button[type="submit"][name="action"]').click();
      }
    );

    cy.wait("@authRequest"); // This is to ensure the access token is available

    // check that element with id of user-email is not an empty string
    cy.get("#user-email").should("not.be.empty");
    cy.get("#user-email").should("contain", Cypress.env("AUTH0_EMAIL"));
  });
});
