//import { computed, observer } from '@ember/object';
//import { computed } from '@ember/object';
import Controller from '@ember/controller';
//import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

//  isDisabled: true,

  responseMessage: '',
  emailAddress: '',
  headerMessage: 'please type your e-mail address',

//  isDisabled: empty('emailAddress')

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

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

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save();

//      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);

      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
