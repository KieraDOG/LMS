export default (validators, value) => {
  const validator = validators.find(v => v[0](value));

  if (!validator) {
    return '';
  }

  return validator[1];
}