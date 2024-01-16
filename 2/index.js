const debounceCallback = (callback, delay) => {
  let timeout;

  return (...rest) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, rest), delay);
  };
};

module.exports = { debounceCallback };
