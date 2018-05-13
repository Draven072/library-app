import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  emailContactAddress: '',
  textContactMessage: '',

  isLongEnough: gte('textContactMessage.length', 5),
  isValidEmail: match('emailContactAddress', /^.+@.+\..+$/),

  isValid: and('isLongEnough', 'isValidEmail'),
  isDisabled: not('isValid'),

  actions: {
    saveContactMessage: function(){
      var email = this.get('emailContactAddress');
      var message = this.get('textContactMessage');

      alert('Sending your message in progress...');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailContactAddress', '');
      this.set('textContactMessage', '');

    }
  }

});
