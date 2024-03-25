const validateValue = (value) => {
  if (value < 0 || value > 10) {
    return false;
  }

  return true;
};

module.exports = validateValue;
