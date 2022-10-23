$(document).ready(function () {
  $(".loading .loading-icon").fadeOut(1000, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });

  $(".topIcon").click(function () {
    $("html,body").animate({ scrollTop: "0" }, 1000);
  });

  let linksWidth = $(".links").outerWidth();
  $(".sideBar").css({ left: `-${linksWidth + 10}px` });

  $(".sideBar .icon").click(function () {
    if ($(".sideBar").css("left") === "0px") {
      $(".sideBar").animate({ left: `-${linksWidth + 10}px` }, 1000);
      $(".toggleIcon").animate({ rotate: "0deg" }, 1);
    } else {
      $(".sideBar").animate({ left: "0px" }, 1000);
      $(".toggleIcon").animate({ rotate: "180deg" }, 1);
    }
  });

  $(".closeButton").click(function () {
    $(".sideBar").animate({ left: `-${linksWidth + 10}px` }, 1000);
  });

  let detailsOffset = $("#details").offset().top;

  $(window).scroll(function () {
    let scrollWindow = $(window).scrollTop();

    if (scrollWindow > detailsOffset - 100) {
      document.querySelector(".icon").classList.remove("text-white");
      $(".topIcon").fadeIn(500);
    } else {
      document.querySelector(".icon").classList.add("text-white");
      document.querySelector(".icon").classList.remove("bg-light");
      $(".topIcon").fadeOut(500);
    }
  });

  $("a[href^='#']").click(function (e) {
    let linkRef = $(e.target).attr("href");
    let currentOffset = $(linkRef).offset().top;
    $("html,body").animate({ scrollTop: currentOffset }, 1000);
  });

  $(".singerName ").click(function (e) {
    if ($(e.currentTarget).next().css("display") == "none") {
      $(".words").slideUp(350);

      for (let i of $(".words")) {
        $(i)
          .prev()
          .children()
          .eq(1)
          .addClass("fa-plus")
          .removeClass("fa-minus");
      }
      $(e.currentTarget).next(".words").slideDown(350);
      $(e.currentTarget)
        .children()
        .eq(1)
        .removeClass("fa-plus")
        .addClass("fa-minus");
    } else {
      $(e.currentTarget).next(".words").slideUp(350);
      for (let i of $(".words")) {
        $(i)
          .prev()
          .children()
          .eq(1)
          .addClass("fa-plus")
          .removeClass("fa-minus");
      }
    }
  });
  setInterval(function () {
    let specifiedDate = new Date(2022, 11, 25, 9, 55, 0);
    let currentDate = new Date();

    let differnce = specifiedDate - currentDate;
    if (differnce >= 0) {
      const days = differnce / (1000 * 60 * 60 * 24);
      const remainDay = Math.trunc(days);
      const hours = (days - remainDay) * 24;
      const remainHours = Math.trunc(hours);
      const minutes = (hours - remainHours) * 60;
      const remainMinutes = Math.trunc(minutes);
      const seconds = (minutes - remainMinutes) * 60;

      document.getElementById("day").textContent = remainDay;
      document.getElementById("hour").textContent = remainHours;
      document.getElementById("minute").textContent = remainMinutes;
      document.getElementById("second").textContent = Math.trunc(seconds);
    } else {
      document.getElementById("day").textContent = 0;
      document.getElementById("hour").textContent = 0;
      document.getElementById("minute").textContent = 0;
      document.getElementById("second").textContent = 0;
      $("#timeOut").fadeIn(500);
    }
  }, 1000);

  const submitBtn = document.querySelector('button[type="submit"]');
  document.getElementById("message").addEventListener("keyup", function (e) {
    if (e.target.value.length < 100) {
      document.getElementById("countCharacter").textContent =
        100 - e.target.value.length;
      submitBtn.removeAttribute("disabled");
    } else {
      document.getElementById("countCharacter").textContent =
        "Your available characters finished";
      submitBtn.setAttribute("disabled", "disabled");
    }
    console.log(e.target.value.length);
  });

  $(".color").click(function (e) {
    const color = $(e.target).css("backgroundColor");
    $("a[href^='#'] , h1 , .counter h4 , .counter span").removeClass(
      "text-white"
    );
    $("a[href^='#'] , .singerName , h1 , .counter h4 , .counter span").css(
      "color",
      color
    );
  });

  $(".fonts").change(function (e) {
    const selectedFont = $(e.target).children("option:selected").val();
    $("h1 , h2 , h3 , h4 , h5 , h6 , a[href^='#'] , .icon").css(
      "fontFamily",
      selectedFont
    );
  });
});
