// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createEntrance', () => { 
    var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Entrance');
        cy.get('#amount').type(150);
        cy.get('#date').type('1990-08-13')
        cy.contains('Salvar').click();
        
 })

 Cypress.Commands.add('exitChash', () => { 
    var x = Math.floor((Math.random() * 10) + 1);
        cy.get('a[class="button new"]').click();
        cy.get('#description').type('Cash Out');
        cy.get('#amount').type(-30);
        cy.get('#date').type('1990-08-13')
        cy.contains('Salvar').click();
        
 })

 Cypress.Commands.add('removeEntrance', () => { 
    cy.get('td.description')
    .contains('Cash Out')
    .parent()
    .find('img')
    .click();

    cy.get('td.description')
    .contains('Entrance')
    .parent()
    .find('img')
    .click();
        
 })

        
 


