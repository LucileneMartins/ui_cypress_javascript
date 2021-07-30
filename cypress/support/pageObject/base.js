/// <reference types="cypress" />

class Base{
    
    clickButton(element){
        cy.get(element).click();
    }
    
    typeElement(element, value){
        cy.get(element).type(value);
    }

    containsClick(value){
        cy.contains(value).click();
    }
    
    
}

const base = new Base();
export default base;