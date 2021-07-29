import {format,prepareLocalStorage} from '../../support/utils'

describe.only('Dev Finances', () => {
    before(() => {
        cy.visit('/', {
            onBeforeLoad : (win) =>{
                prepareLocalStorage(win)
            }
        });

        cy.get('.description').should('have.length', 2)
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