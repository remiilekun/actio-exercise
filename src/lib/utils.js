export const pluckDeep = key => obj =>
  key.split('.').reduce((accum, item) => accum[item], obj);

export const padNumber = n => `0${n}`.slice(-2);

export const msToHMS = ms => {
  let seconds = ms / 1000;

  let hours = parseInt(seconds / 3600, 10);
  seconds = seconds % 3600;

  let minutes = parseInt(seconds / 60, 10);

  seconds = parseInt(seconds % 60, 10);

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
};
