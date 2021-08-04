import {format} from '../../support/utils/utils'

describe('Dev Finances', () => {
    before(() => {
        cy.visit('/');
    });

    it.only('Create entrance', () => {        
        var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Entrada ');
        cy.get('#amount').type(150);
        cy.get('#date').type('1990-08-13')
        cy.contains('Salvar').click();
        cy.get('.description').should('have.text','Entrada ')
        
    });
    it.only('Create exit', () => {

        var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Saida ');
        cy.get('#amount').type(-20);
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

    it.only('Validate Value ', () => {
    let income = 0;
    let expense = 0;
    
       cy.get('#data-table tbody tr') 
       .each(($el,index,$list) => {
        
        cy.get($el).find('td.income, td.expense').invoke('text').then(text => {
            if(text.includes('-')){
                expense = expense + format(text);
            }
            else{
                income = income + format(text);
            }
        })

       })

       cy.get('#totalDisplay').invoke('text').then(text => {
           let expectedTotal = income + expense;

           expect(format(text)).equal(expectedTotal)
       })
    });
});