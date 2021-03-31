"use strict";

$(document).ready(function () {
    //Arr to change button text
    let price = ["premium", "regular", "exclusive"];

    $(".nav-toggler").click(function () {
        $(".nav-items-container").slideToggle();
        $(this).toggleClass("active");
    });

    //Img change

    $(".quote-img img").on("mouseenter", function () {
        $(this).attr("src", "images/quote-comp-2.png");
    });
    $(".quote-img img").on("mouseleave", function () {
        $(this).attr("src", "images/quote-comp-1.png");
    });


    //Change button text on price card

    $(".price-card").on("mouseenter", function () {
        $(this).find("button").css({
            "font-size": 16,
            "font-weight": 400
        });
        $(this).find("button").html(`Let’s Start <i class="fas fa-chevron-right"></i>`);
        $(this).find("i").css({ "animation": "move 2s infinite" });
    });

    $(".price-card").on("mouseleave", function () {
        $(this).find("button").css({
            "font-size": 20,
            "font-weight": 700
        });
        $(this).find("button").text(price[$(this).index()]);
    });

    //Scroll animation

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".features").offset().top) {
            $(".feature-submit").delay(600).css({
                "transform": "translateY(0)",
                "opacity": 1
            });
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".out-team").offset().top - 400) {
            $(".team-progressive").each(function () {
                $(this).animate(
                    { width: $(this).data("prog") + "%" },
                    { duration: 2000 });
            })
        }
    });

    //Progress count animation

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".out-team").offset().top - 100) {
            $(".team-progress-content p").each(function () {
                $(this).prop("counter", 0).animate({
                    counter: $(this).data("count")
                }, {
                    duration: 2000,
                    step: function (now) {
                        $(this).text(Math.ceil(now) + " %");
                    }
                });
            });
        }
    });

    //Portfolio items sorting

    $(".p-nav-item").on("click", function () {
        $(".p-nav-item").removeClass("active");
        $(".portfolio-item").removeClass("active");
        $(this).addClass("active");
        let dataFlag = $(this).data("show");
        setTimeout(() => {
            $(".portfolio-item").each(function () {
                if ($(this).data("mark") == dataFlag || dataFlag == "all") {
                    $(this).addClass("active");
                }
            });
        }, 4);
    });

    //Sensor devices

    if (window.innerWidth < 992) {
        $(".datail-icon").add(".design-icon")
            .add(".features-item").add(".price-card").click(function () {
                $(this).toggleClass("active");
            });

        $(".portfolio-item").click(function () {
            $(this).toggleClass("show");
        });

        $(".nav-item").click(() => {
            $(".nav-items-container").slideToggle();
            $(".nav-toggler").toggleClass("active");
        });

        $(".price-card").click(function () {
            if ($(this).find("button").html() !=
                `Let’s Start <i class="fas fa-chevron-right"></i>`) {
                $(this).find("button").css({
                    "font-size": 16,
                    "font-weight": 400
                });
                $(this).find("button").html(`Let’s Start <i class="fas fa-chevron-right"></i>`);
                $(this).find("i").css({ "animation": "move 2s infinite" });
            }
            else {
                $(this).find("button").css({
                    "font-size": 20,
                    "font-weight": 700
                });
                $(this).find("button").text(price[$(this).index()]);
            }
        });
    }

    //Sliders

    $(".our-team-slider, .testimonials-slider").slick({
        arrows: false,
        autoplaySpeed: 5000,
        autoplay: true,
        dots: true
    });

    $(".latest-slider").slick({
        vertical: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    //Scroll Reveal

    (() => {
        let sr = new ScrollReveal();

        sr.reveal(".animation-left", {
            distance: "25rem",
            origin: "left",
            duration: 1000,
            delay: 600
        });

        sr.reveal(".animation-right", {
            distance: "25rem",
            origin: "right",
            duration: 1000,
            delay: 600
        });

        sr.reveal(".animation-top", {
            distance: "25rem",
            origin: "top",
            duration: 1000,
            delay: 600
        });

        sr.reveal(".animation-bottom", {
            distance: "25rem",
            origin: "bottom",
            duration: 1000,
            delay: 600
        });
    })();

});



