import {randomNumber} from '../../support/utils/utils'
import base from '../../support/pageObject/base'
import validations from '../../support/utils/validations'
import {buttonNewTransaction,buttonSubmit,txt_description} from '../../support/pageObject/elements'
import {descriptionEntrance, descriptionCashOut} from '../../support/utils/date'
import createEntrance from '../../support/pageObject/createEntrance'
import removeEntrance from '../../support/pageObject/removeEntrance'

describe('Dev Finances', () => {
    before(() => {
        cy.visit('/');
    });

    it.only('Create entrance', () => {   

        base.clickButton(buttonNewTransaction);
        createEntrance.formEntrance(descriptionEntrance,randomNumber());
        base.containsClick(buttonSubmit);   
        validations.haveText(txt_description,descriptionEntrance)  
       
        
    });

    it.only('Create exit', () => {

        base.clickButton(buttonNewTransaction);
        createEntrance.formEntrance(descriptionCashOut,-randomNumber());
        base.containsClick(buttonSubmit);       
        validations.haveLastText(txt_description,descriptionCashOut)  

                
    });

    it.only('Remove entrace and exit', () => {
        removeEntrance.formRemoveEntrance(descriptionCashOut);
        removeEntrance.formRemoveEntrance(descriptionEntrance);
        validations.haveLength(txt_description,0)
    });

});