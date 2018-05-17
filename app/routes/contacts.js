import Route from '@ember/routing/route';

export default Route.extend({
//  emailContactAddress: '',
//  textContactMessage: '',

model() {
  return this.store.createRecord('contact');
},

  actions: {
/*
    saveContactMessage: function(){
      const email = this.get('emailContactAddress');
      const message = this.get('textContactMessage');

      const newContact = this.store.createRecord('contact', { email:email, message:message });
      newContact.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your message with the following id: ${response.get('id')}`);
        this.set('emailContactAddress', '');
        this.set('textContactMessage', '');
      });
    }
*/

        saveContactMessage(newContact) {
          newContact.save().then(() => this.transitionTo('response'));
        },

        willTransition() {
          this.controller.get('model').rollbackAttributes();
        }

  }

});
