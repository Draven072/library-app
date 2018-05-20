import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(() => this.transitionTo('base'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'

      this.controller.get('model').rollbackAttributes();
//      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    }
  }

});
