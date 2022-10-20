// live reload code

var originalDate;
function check() {
  fetch(document.getElementById("script-to-reload").src)
    .then(r => {
      var newDate = r.headers.get("Last-Modified");
      if (!originalDate) {
        originalDate = newDate;
      }
      if (newDate !== originalDate) {
        location = location;
      } else {
        setTimeout(() => check(), 500);
      }
    });
}
check();
