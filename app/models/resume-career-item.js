import DS from 'ember-data';

export default DS.Model.extend({
  resume: DS.belongsTo('resume', { async: true }),
  jobTitle: DS.attr('string'),
  company: DS.attr('string'),
  location: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  descriptions: DS.attr(),
});
