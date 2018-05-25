import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  resumeCareerItems: DS.hasMany('resume-career-item', { async: true }),
});
