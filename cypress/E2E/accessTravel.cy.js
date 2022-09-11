///<reference types = "Cypress"/>
describe('Accesstravel tests', () =>{

    it('Navigate to the website',() => {
        cy.visit('https://www.accesstravel.com/en-US');
        cy.get('.attractions-search__head-title',{timeout: 10000});
        //cy.get('.attractions-search__head-title').contains('INCLUSIVE ATTRACTIONS AND TOURS').invoke('text').should('equal', 'INCLUSIVE ATTRACTIONS AND TOURS');
        cy.url().should('eq', 'https://www.accesstravel.com/en-US');
    });
});