export default (str) =>
  str
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "");
