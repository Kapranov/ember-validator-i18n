import Ember from 'ember';
import PersonUtil from '../utils/person-utils';

const {
  get,
  inject: { service },
  assert,
  isEmpty
} = Ember;

const { PERSON } = PersonUtil;

export default Ember.Controller.extend({
  i18n: service(),

  validateField(field) {
    this.get('model').validate({ only: [field] });
  },

  setField(field, value) {
    assert(`Must pass a valid attribute - ${field}`, !isEmpty(field));
    let model = get(this, 'model');
    model.set(field, value);
    this.validateField(field);
  },

  actions: {
    setName(name) {
      let model = get(this, 'model');
      model.set('name', name);
      this.setField(PERSON.NAME, name);
    },

    setAge(age) {
      let model = get(this, 'model');
      model.set('age', age);
      this.setField(PERSON.AGE, age);
    },

    setLocale(value) {
      this.set('i18n.locale', value);
    }
  }
});
