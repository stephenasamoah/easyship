/**
 * Removes all undefined and null properties from an object
 * @param obj - Object to be clean
 */
export function cleanProperties(obj: object): object {

  const model = Object.assign({}, obj);

  Object.keys(model).forEach((field) => {
    if (Array.isArray(model[field])) {
      if (!model[field].length) {
        delete model[field];
      } else {
        model[field] = cleanProperties(model[field]);
      }
    } else {
      if (typeof model[field] === 'object' && Object.keys(model[field] || {}).length) {
        model[field] = cleanProperties(model[field]);
      } else {
        if (model[field] === undefined || model[field] === null) {
          delete model[field];
        }

        if (typeof model[field] === 'string' && !removeWhiteSpaces(model[field])) {
          delete model[field];
        }
      }
    }
  });

  return model;
}

/**
 * Removes multiple whitespaces from a given string
 * @param text - Text to be removed
 */
export function removeWhiteSpaces(text: string): string {
  return text.trim().split(' ').filter((subText) => subText.trim()).map((subText) => subText.trim()).join(' ').trim();
}
