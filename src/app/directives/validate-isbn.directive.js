export default function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      let getIsbn = (str) => str.replace(/[\s-]/gi, '');
      let checkIsbn = (isbn) => {
        let factor = 11;
        let sum = 0;

        for (var i = 0; i < isbn.length; i++) {
          sum += ((10 - i) * parseInt(isbn[i]));
        };
        return factor - sum % factor;
      };

      ctrl.$validators.invanlidIsbn = (modelVal) => {
        if (!modelVal) {
          return true;
        }
        let isbnStr = getIsbn(modelVal);
        if (isbnStr.length > 10) {
          return false;
        }
        let calculated = checkIsbn(isbnStr);
        return calculated == isbnStr.slice(-1);
      }
    }
  }
}