import values from 'lodash/values';
import { ContentNodeKinds, LearningActivities } from 'kolibri.coreVue.vuex.constants';
import every from 'lodash/every';
import keys from 'lodash/keys';

/**
 * Validation for vue router "location descriptor objects".
 * See e.g. https://router.vuejs.org/en/api/router-link.html
 */
export function validateLinkObject(object) {
  const validKeys = ['name', 'path', 'params', 'query'];
  return every(keys(object), key => validKeys.includes(key));
}

export function validateUsername(username) {
  const hasPuncRe = /[\s`~!@#$%^&*()\-+={}\[\]\|\\\/:;"'<>,\.\?]/; // eslint-disable-line
  return !hasPuncRe.test(username);
}

export function validateContentNodeKind(value, others = []) {
  return [...values(ContentNodeKinds), ...others].includes(value);
}

export function validateLearningActivity(arr) {
  const isValidLearningActivity = v => Object.values(LearningActivities).includes(v);
  return arr.length > 0 && arr.every(isValidLearningActivity);
}

export function objectValidator(spec) {
  console.log('VALIDATE');
  console.log(spec);
  return () => true;
}
