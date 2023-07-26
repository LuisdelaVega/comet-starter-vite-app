describe("signin spec", () => {
  beforeEach(() => {
    // Test Setup
    cy.viewport("macbook-16");
  });

  it("navigates to home and signs in", () => {
    // Navigate to Homepage
    cy.visit("/");

    // Setup Accessibility Testing
    cy.injectAxe();

    // Verify Homepage
    cy.get("h1").should("contain", "Welcome Guest");

    // Navigate to Sign-in page
    cy.get("#auth-link").click();

    // Verify no accessibility violations
    cy.checkA11y();

    // Login
    cy.signIn("test", "test");

    // Verify Homepage after signin
    cy.get("h1").should("contain", "Welcome John Doe");
    cy.get("#sign-in-alert").should("not.exist");
  });
});
