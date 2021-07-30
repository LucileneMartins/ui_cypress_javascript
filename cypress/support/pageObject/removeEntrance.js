import {field_tdDescription, image} from './elements'


class RemoveEntrance{

    formRemoveEntrance(valueDescription){
        cy.get(field_tdDescription)
        .contains(valueDescription)
        .parent()
        .find(image)
        .click();
    }  

}


const removeEntrance = new RemoveEntrance();
export default removeEntrance;