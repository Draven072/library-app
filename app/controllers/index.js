//import { computed, observer } from '@ember/object';
//import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({

//  isDisabled: true,

  emailAddress: '',

  isDisabled: empty('emailAddress')

/*
  isDisabled: computed('emailAddress', function() {
    return this.get('emailAddress') === '';
  })
*/
/*  actualEmailAddress: computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  })
*/
});
