import DS from 'ember-data';
import { notEmpty, match, and } from '@ember/object/computed';
import Faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  books: DS.hasMany('book', { inverse: 'library', async: true }),

  isValidPhone: match('phone', /(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/),

  isValidName: notEmpty('name'),
  isValid: and('isValidPhone', 'isValidName'),

  randomize() {
    this.set('name', Faker.company.companyName() + ' Library');
    this.set('address', this._fullAddress());
    this.set('phone', Faker.phone.phoneNumber());

    // If you would like to use in chain.
    return this;
  },

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }

});
