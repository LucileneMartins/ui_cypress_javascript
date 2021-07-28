describe('Dev Finnaces', () => {
    before(() => {
        cy.visit('/');
    });

    it('Create entrance', () => {        
        var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Entrada ');
        cy.get('#amount').type(5.00);
        cy.get('#date').type('1990-08-13')
        cy.contains('Salvar').click();
        cy.get('.description').should('have.text','Entrada ')
        
    });
    it('Create exit', () => {

        var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Saida ');
        cy.get('#amount').type(-3);
        cy.get('#date').type('1990-08-13')
        cy.contains('Salvar').click();
        cy.get('.description').last().should('have.text','Saida ')
        
    });
    it('Remove entrace and exit', () => {
        cy.get('td.description')
        .contains('Saida')
        .parent()
        .find('img')
        .click();

        //forma diferente de acessar o elemento filho
        cy.get('td.description')
        .contains('Entrada')
        .siblings()
        .children('img')       
        .click();

        cy.get('.description').should('have.length', 0)
    });
});