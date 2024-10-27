describe('Cadastro no site adopet', () => {
  it('Realiza cadastro no site Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('Cadastrar').click();
    cy.get('[data-test="input-name"]').type('Jason Silva');
    cy.get('[data-test="input-email"]').type('teste12@teste.com');
    cy.get('[data-test="input-password"]').type('Senha@123');
    cy.get('[data-test="input-confirm-password"]').type('Senha@123');
    cy.get('[data-test="submit-button"]').click();
  })
  
})