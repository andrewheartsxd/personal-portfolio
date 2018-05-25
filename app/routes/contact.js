import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  setupController: function (controller, model) {
    controller.set('contact', model);
  },

  actions: {

    submitMessage(newMessage) {
      let email = newMessage.get('email');
      this.controller.set('responseMessage', `Thank you! We've received your message from: ${email}`);
      //newMessage.save().then((newMessage) => {
        //let email = newMessage.get('email');
        //this.controller.set('responseMessage', `Thank you! We've received your message from: ${email}`);
        //newMessage.set('email', '');
        //newMessage.set('message', '');
      //});
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', '');
    }

  }
  
});
