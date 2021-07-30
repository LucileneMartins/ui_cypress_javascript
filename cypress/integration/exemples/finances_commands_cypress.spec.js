describe('Dev Finances', () => {
    before(() => {
        cy.visit('/');
    });

    it.only('Create entrance', () => {        
       
        cy.createEntrance();
        
    });
    it.only('Create exit', () => {

        cy.exitChash();
        
    });
    it.only('Remove Entrances ', () => {
        
        cy.removeEntrance();


    });

});