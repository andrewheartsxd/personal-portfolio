import Component from '@ember/component';

export default Component.extend({

  resumeCareerItem: null,

  newDescription: null,

  jobDescriptions: Ember.computed('resumeCareerItem.descriptions.@each', function () {
    return this.get('resumeCareerItem.descriptions');
  }),

  actions: {

    editJobTitle(resumeCareerItem) {
      resumeCareerItem.set('isEditingJobTitle', true);
    },

    cancelJobTitleEdit(resumeCareerItem) {
      resumeCareerItem.set('isEditingJobTitle', false);
    },

    editCompanyLocation(resumeCareerItem) {
      resumeCareerItem.set('isEditingCompanyLocation', true);
    },

    cancelCompanyLocationEdit(resumeCareerItem) {
      resumeCareerItem.set('isEditingCompanyLocation', false);
    },

    editJobDescription(description) {
      Ember.set(description, 'isEditing', true);
    },

    cancelJobDescriptionEdit(description) {
      Ember.set(description, 'isEditing', false);
    },

    addJobDescription(descriptionText, resumeCareerItem) {
      this.sendAction('addJobDescription', descriptionText, resumeCareerItem);
      this.set('newDescription', null);
    },

  }

});
