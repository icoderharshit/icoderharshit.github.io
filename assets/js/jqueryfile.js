const typed = document.getElementById("typedd");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed("#typedd", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

AOS.init();
function active() {
  var id = $(location).attr("href").split("#")[1];
  if (id === "#") {
    $("#navi").find("li")[0].addClass("activemenui activemenuborder");
  } else if (id === "about") {
  } else if (id === "resume") {
  } else if (id === "portfolio") {
  } else if (id === "services") {
  } else if (id === "contact") {
  }
}

$("#navi li a").hide();
$("#navi li").click(function () {
  active();
  $(this).addClass("activemenu activemenuborder");
  $(this).find("i").addClass("activemenui");

  $(location).attr("href", "./index.html" + $(this).find("a").attr("href"));
});
$("#navi li").mouseenter(function () {
  $(this).find("a").show().addClass("activemenu");
  $(this).addClass("activemenu activemenuborder");
  $(this).find("i").addClass("activemenui");
});
$("#navi li").mouseleave(function () {
  $(this).find("a").hide().removeClass("activemenu");

  $(this).removeClass("activemenu activemenuborder");
  $(this).find("i").removeClass("activemenui");
});
//     var height=(parseInt($('.card').css('height').split('p')[0])+50)+'px';
//   console.log(height);
//     $('.card').css('height',height);
$(".location").mouseenter(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(34, 54, 117)", color: "white" });
});
$(".location").mouseleave(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(241, 244, 255)", color: "black" });
});
$(".email").mouseenter(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(34, 54, 117)", color: "white" });
});
$(".email").mouseleave(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(241, 244, 255)", color: "black" });
});
$(".phone").mouseenter(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(34, 54, 117)", color: "white" });
});
$(".phone").mouseleave(function () {
  $(this)
    .find("i")
    .css({ backgroundColor: "rgb(241, 244, 255)", color: "black" });
});
$("body").addClass("dark-body");
$("body").addClass("dark-body");
$("#navi li").addClass("dark-navili");
$("#navi li i").addClass("dark-links");
$("#name-heading").addClass("dark-links");
$("#hero").find("p#fixtype").addClass("dark-typehero");
$("#typedd").addClass("dark-typehero");
$("#social i").addClass("dark-namesocial");
$(".yearh").addClass("dark-yearh");
$("#resume h4").addClass("dark-resumeh4");
$("#contact input").addClass("dark-contact");
$("#contact textarea").addClass("dark-contact");
$("#contact i").addClass("dark-contacti");
$("#contact button").addClass("dark-button");
$("#portfolio .card").addClass("dark-card");
$("#about .col-lg-8 h2").addClass("dark-abouth2");
$("section h1").addClass("dark-abouth2");
$("#hero-filter").addClass("dark-hero");
$("#darktoggle i").addClass("dark-toggleicon");
if ($(this).find("i").hasClass("bi-sun")) {
  $(this).find("i").removeClass("bi-sun");
  $(this).find("i").addClass("bi-moon");
} else {
  $(this).find("i").removeClass("bi-moon");
  $(this).find("i").addClass("bi-sun");
}

$("#darktoggle").click(function () {
  $("body").toggleClass("dark-body");
  $("#navi li").toggleClass("dark-navili");
  $("#navi li i").toggleClass("dark-links");
  $("#name-heading").toggleClass("dark-links");
  $("#hero").find("p#fixtype").toggleClass("dark-typehero");
  $("#typedd").toggleClass("dark-typehero");
  $("#social i").toggleClass("dark-namesocial");
  $(".yearh").toggleClass("dark-yearh");
  $("#resume h4").toggleClass("dark-resumeh4");
  $("#contact input").toggleClass("dark-contact");
  $("#contact textarea").toggleClass("dark-contact");
  $("#contact i").toggleClass("dark-contacti");
  $("#contact button").toggleClass("dark-button");
  $("#portfolio .card").toggleClass("dark-card");
  $("#about .col-lg-8 h2").toggleClass("dark-abouth2");
  $("section h1").toggleClass("dark-abouth2");
  $("#hero-filter").toggleClass("dark-hero");
  $("#darktoggle i").toggleClass("dark-toggleicon");
  if ($(this).find("i").hasClass("bi-sun")) {
    $(this).find("i").removeClass("bi-sun");
    $(this).find("i").addClass("bi-moon");
  } else {
    $(this).find("i").removeClass("bi-moon");
    $(this).find("i").addClass("bi-sun");
  }
  if (document.querySelector(".dark-contact")) {
    document
      .querySelector(".email a")
      .setAttribute("style", "color: #ccd6f6; text-decoration:none");
  } else {
    document
      .querySelector(".email a")
      .setAttribute("style", "text-decoration:none;color:black");
  }
});
