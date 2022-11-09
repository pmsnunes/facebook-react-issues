describe("Home page testa", () => {
  it("Static content", () => {
    cy.visit("/");

    // The page should contain an h1 with "Dashboard"
    cy.get("h1").contains("Dashboard");

    cy.get("footer").contains("pmsnunes");
  });

  it("Table loads", () => {
    cy.intercept("https://api.github.com/graphql").as("getIssues");

    cy.visit("/");

    cy.wait("@getIssues").then((interception) => {
      assert.equal(interception.response.statusCode, 200);
    });
  });
});
