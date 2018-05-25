import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('resume').then(function (items) {
      return items.get('firstObject');
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('resume', Ember.computed.alias('model'));
    controller.set('collapsed', true);
  },

  actions: {

    saveEdit(resumeCareerItem) {
      resumeCareerItem.save();
    },

    deleteResumeCareerItem(resumeCareerItem) {
      resumeCareerItem.destroyRecord();
    },

    addResumeCareerItem(resumeCareerItem) {
      this.store.createRecord('resume-career-item');
    },

    addJobDescription(descriptionText, resumeCareerItem) {
      let newDescription = {text: descriptionText};
      let descriptions = resumeCareerItem.get('descriptions');
      descriptions.push(newDescription);
      this.send('saveEdit', resumeCareerItem);
    },

    deleteJobDescription(description, resumeCareerItem) {
      let descriptions = resumeCareerItem.get('descriptions');
      let descriptionToRemove = descriptions.findBy('text', description.text);
      if (!descriptionToRemove) {
        console.log('Description not found!');
        return;
      }
      descriptions.removeObject(descriptionToRemove);
      this.send('saveEdit', resumeCareerItem);
    },

    toggle() {
      this.controller.toggleProperty('collapsed', true);
    }

  }
});
