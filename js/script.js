document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION

    const toggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav");

    if (toggle && nav) {

        toggle.addEventListener("click", function () {

            const open = nav.classList.toggle("open");

            toggle.setAttribute("aria-expanded", String(open));

            toggle.textContent = open ? "×" : "☰";

        });


        // CLOSE MENU AFTER CLICKING A LINK

        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                toggle.setAttribute("aria-expanded", "false");

                toggle.textContent = "☰";

            });

        });

    }


    // AUTOMATIC COPYRIGHT YEAR

    document.querySelectorAll("[data-year]").forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    // CONTACT FORM

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const data = new FormData(form);

            // CHANGE THIS TO YOUR EMAIL ADDRESS

            const recipient = "pratikshyasahu71@gmail.com";

            const subject = encodeURIComponent(
                "Portfolio enquiry from " + data.get("name")
            );

            const body = encodeURIComponent(
                "Name: " + data.get("name") +
                "\nEmail: " + data.get("email") +
                "\n\n" + data.get("message")
            );

            window.location.href =
                `mailto:${recipient}?subject=${subject}&body=${body}`;

        });

    }

});