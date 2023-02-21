export const capitalizeAllFirstLetter = (str = "") =>
  str?.replace(/\b\w/g, l => l?.toUpperCase());
