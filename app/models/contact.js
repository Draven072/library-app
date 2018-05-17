import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';


const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  message: [
    validator('presence', true),
    validator('length', {
      min: 5,
    })
  ],
});


export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  message: DS.attr('string'),

});
