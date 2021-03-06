$(document).ready(() => {
  const menuToggle = $(".toggle");
  const content = $(".content");
  const navIcon = $("#navIcon");
  let menuOpened = false;

  menuToggle.click(() => {
    menuOpened = menuOpened ? false : true;
    menuToggle.toggleClass("active");
    content.toggleClass("active");

    if (menuOpened) {
      navIcon.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      navIcon.removeClass("fa-xmark").addClass("fa-bars");
    }
  });
});
