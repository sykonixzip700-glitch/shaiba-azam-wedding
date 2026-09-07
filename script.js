/* =========================================
   ROYAL ISLAMIC WEDDING
   SCRIPT.JS
========================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


    /* =====================================
       PAGE LOAD
    ===================================== */

    setTimeout(function () {

        document.body.classList.add(
            "page-loaded"
        );

    }, 200);



    /* =====================================
       COUNTDOWN
       7 NOVEMBER 2026
       1:00 PM
    ===================================== */

    const weddingDate =
        new Date(
            2026,
            10,
            7,
            13,
            0,
            0
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        const days =
            document.getElementById(
                "days"
            );


        const hours =
            document.getElementById(
                "hours"
            );


        const minutes =
            document.getElementById(
                "minutes"
            );


        const seconds =
            document.getElementById(
                "seconds"
            );


        if (
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ) {
            return;
        }


        if (distance <= 0) {

            days.innerHTML = "00";

            hours.innerHTML = "00";

            minutes.innerHTML = "00";

            seconds.innerHTML = "00";

            return;
        }


        const d =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const h =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const m =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const s =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );


        days.innerHTML =
            String(d).padStart(2, "0");


        hours.innerHTML =
            String(h).padStart(2, "0");


        minutes.innerHTML =
            String(m).padStart(2, "0");


        seconds.innerHTML =
            String(s).padStart(2, "0");


        /* Second pulse */

        seconds.classList.remove(
            "count-pulse"
        );


        void seconds.offsetWidth;


        seconds.classList.add(
            "count-pulse"
        );

    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );



    /* =====================================
       ENTER INVITATION
    ===================================== */

    window.scrollToInvitation =
        function () {

            const invitation =
                document.getElementById(
                    "invitation"
                );


            if (invitation) {

                invitation.scrollIntoView({
                    behavior: "smooth"
                });

            }

        };



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            "section, " +
            ".detail-card, " +
            ".family-card, " +
            ".gallery-item, " +
            ".time-box, " +
            ".venue-card"
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

        }
    );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "reveal-active"
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );



    /* =====================================
       FLOATING GOLD PARTICLES
    ===================================== */

    function createParticle() {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "gold-particle";


        particle.innerHTML =
            Math.random() > .5
            ? "✦"
            : "✧";


        particle.style.left =
            Math.random() * 100 +
            "vw";


        particle.style.animationDuration =
            (
                5 +
                Math.random() * 6
            ) +
            "s";


        particle.style.fontSize =
            (
                8 +
                Math.random() * 12
            ) +
            "px";


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            12000
        );

    }


    setInterval(
        createParticle,
        650
    );



    /* =====================================
       CLICK SPARKLE
    ===================================== */

    document.addEventListener(
        "click",
        function (event) {


            for (
                let i = 0;
                i < 6;
                i++
            ) {

                const sparkle =
                    document.createElement(
                        "span"
                    );


                sparkle.className =
                    "click-sparkle";


                sparkle.innerHTML =
                    "✦";


                sparkle.style.left =
                    event.clientX +
                    "px";


                sparkle.style.top =
                    event.clientY +
                    "px";


                sparkle.style.setProperty(
                    "--x",
                    (
                        Math.random() *
                        120 -
                        60
                    ) +
                    "px"
                );


                sparkle.style.setProperty(
                    "--y",
                    (
                        Math.random() *
                        120 -
                        60
                    ) +
                    "px"
                );


                document.body.appendChild(
                    sparkle
                );


                setTimeout(
                    function () {

                        sparkle.remove();

                    },
                    900
                );

            }

        }
    );



    /* =====================================
       GALLERY LIGHTBOX
    ===================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );


    galleryImages.forEach(
        function (image) {


            image.addEventListener(
                "click",
                function () {


                    const lightbox =
                        document.createElement(
                            "div"
                        );


                    lightbox.className =
                        "lightbox";


                    const bigImage =
                        document.createElement(
                            "img"
                        );


                    bigImage.src =
                        image.src;


                    bigImage.alt =
                        image.alt;


                    lightbox.appendChild(
                        bigImage
                    );


                    document.body.appendChild(
                        lightbox
                    );


                    lightbox.addEventListener(
                        "click",
                        function () {

                            lightbox.remove();

                        }
                    );

                }
            );

        }
    );



    /* =====================================
       PHOTO PARALLAX
    ===================================== */

    const photo =
        document.querySelector(
            ".photo-frame img"
        );


    if (photo) {

        document.addEventListener(
            "mousemove",
            function (event) {


                const x =
                    (
                        window.innerWidth / 2 -
                        event.clientX
                    ) / 40;


                const y =
                    (
                        window.innerHeight / 2 -
                        event.clientY
                    ) / 40;


                photo.style.transform =
                    "translate(" +
                    x +
                    "px," +
                    y +
                    "px) scale(1.04)";

            }
        );

    }



    /* =====================================
       DATE CARD GLOW
    ===================================== */

    const dateCard =
        document.querySelector(
            ".date-card"
        );


    if (dateCard) {

        setInterval(
            function () {

                dateCard.classList.toggle(
                    "date-glow"
                );

            },
            1800
        );

    }



    /* =====================================
       MUSIC VOLUME
    ===================================== */

    const music =
        document.getElementById(
            "weddingMusic"
        );


    if (music) {

        music.volume = .35;

    }



    /* =====================================
       BACK TO TOP
    ===================================== */

    const backTop =
        document.createElement(
            "button"
        );


    backTop.innerHTML =
        "↑";


    backTop.className =
        "back-top";


    backTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(
        backTop
    );


    window.addEventListener(
        "scroll",
        function () {


            if (
                window.scrollY >
                500
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* =====================================
       MOUSE SPARKLE TRAIL
    ===================================== */

    let lastSparkle = 0;


    document.addEventListener(
        "mousemove",
        function (event) {


            const now =
                Date.now();


            if (
                now -
                lastSparkle <
                120
            ) {
                return;
            }


            lastSparkle =
                now;


            const sparkle =
                document.createElement(
                    "span"
                );


            sparkle.className =
                "cursor-sparkle";


            sparkle.innerHTML =
                "✧";


            sparkle.style.position =
                "fixed";


            sparkle.style.left =
                event.clientX +
                "px";


            sparkle.style.top =
                event.clientY +
                "px";


            sparkle.style.color =
                "#c9a44c";


            sparkle.style.pointerEvents =
                "none";


            sparkle.style.zIndex =
                "9998";


            sparkle.style.transition =
                "all .7s ease";


            document.body.appendChild(
                sparkle
            );


            requestAnimationFrame(
                function () {

                    sparkle.style.opacity =
                        "0";

                    sparkle.style.transform =
                        "translateY(-20px) scale(0)";

                }
            );


            setTimeout(
                function () {

                    sparkle.remove();

                },
                700
            );

        }
    );


});
