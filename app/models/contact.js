import DS from 'ember-data';
import { computed } from '@ember/object';
import { match, not } from '@ember/object/computed';
//import { gte } from '@ember/object/computed';
//import { and } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

//  isDisabled: computed('model.message',function(){
//    return this.gte('model.message', 5);
//  })


//  isLongEnough: gte('message.length', 5),
//  isValidEmail: match('email', /^.+@.+\..+$/),

//  isValid: and('isLongEnough', 'isValidEmail'),
//  isDisabled: not('isValid'),

});
