$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }

    })
    $("#owl-demo1").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }

    })
    $("#owl-demo2").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }

    })
    $("#owl-demo3").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }

    });

});


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
   
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("body").style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.overflow = "overlay";
}




