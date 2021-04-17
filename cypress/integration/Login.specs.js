describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('[data-testid="username"]').type('user');
    cy.get('[data-testid="password"]').type('1234');

    cy.get('[data-testid="loginButton"]').click();

    cy.location('pathname').should('eq', '/boards');
  });
});
