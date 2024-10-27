describe('Exercicio Proposto', () => {
    it('Acessa o site adopet', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('Ver pets disponíveis para adoção').click();
        cy.get('.header__home').click();
    });
    it('Visita a tela de login', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    });
    it('Visita a tela de home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    });
    it('Visita a tela de home e clica em falar com responsável', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    });
});