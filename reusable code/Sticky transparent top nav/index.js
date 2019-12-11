window.onscroll = function () {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >= document.getElementsByClassName("content")[0].offsetTop) {
        document.getElementsByClassName("header")[0].style.paddingTop = "50px";
    } else {
        document.getElementsByClassName("header")[0].style.paddingTop = "50px";
    }
};

var btn = $("#goTop");

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "300");
});

