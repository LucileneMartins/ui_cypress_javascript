
import {date} from '../utils/date'
import {field_descriptionId, field_amount, field_date} from './elements'


class CreateEntrance{   
    
    formEntrance(descript, value){
        cy.get(field_descriptionId).type(descript);
            cy.get(field_amount).type(value);
            cy.get(field_date).type(date)
    }
  

}


const createEntrance = new CreateEntrance();
export default createEntrance;