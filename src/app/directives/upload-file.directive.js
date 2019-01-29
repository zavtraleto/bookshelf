export default function () {
  return {
    link: function (scope, element, attrs) {
      element.on('change', (event) => {
        let img = event.srcElement.files[0];
        let loader = new FileReader();
        loader.onload = (event) => scope.$ctrl.book.image = event.target.result;
        loader.readAsDataURL(img);
      });
    }
  }
}
