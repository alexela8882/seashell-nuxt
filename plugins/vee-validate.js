import { extend, localize } from "vee-validate"
import * as rules from "vee-validate/dist/rules"

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize({
  en: {
    messages: {
      required: '{_field_} field is required',
      email: '{_field_} field is not a valid E-mail address',
      min: '{_field_} field must have no less than {length} characters',
      max: (_, { length }) => `{_field_} field must have no more than ${length} characters`
    }
  }
})

// const dictionary = {
//   en: {
//     attributes: {
//       email: 'Email Address'
//     }
//   }
// };

// this.$validator.localize(dictionary)
