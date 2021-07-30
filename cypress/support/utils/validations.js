class Validations{

    haveText(element,value){
        cy.get(element).should('have.text',value)
    }
    haveLastText(element,value){
        cy.get(element).last().should('have.text',value)
    }
    haveLength(element,value){
        cy.get(element).should('have.length', value)
    }
   
}

const validations = new Validations();
export default validations;
