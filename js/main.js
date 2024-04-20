$(document).ready(function() {
    // set-bg-img
    $(".set-bg-img").css('background-image', function() {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });

    // btnToTop
    var btnToTop = document.getElementById("return-to-top");
    btnToTop.style.opacity = '0'

    window.onscroll = function() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            btnToTop.style.opacity = '1'
        } else {
            btnToTop.style.opacity = '0'
        }

    };
    $('#return-to-top').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })



    $('.navbar-nav .nav-link').on('click', function() {
        $("#nav-icon").click()
    })

    $('.href-home-section').on('click', function() {
        var thisData = $(this).data('href');
        location.href = '/#' + thisData;
    })

    $('#nav-icon').on('click', function() {
        $(this).toggleClass('open')
        $('#main_nav29').slideToggle()

    })

    $(".navbar-nav .nav-link").click(function() {
        var href = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);
    });

    // fixed-top

    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 250) {
            $('.navbar-soft').addClass('fixed-top')
        } else {
            $('.navbar-soft').removeClass('fixed-top')

        }

    })


    setTimeout(() => {
        document.getElementById('page-loader').style.opacity = 0;
        document.querySelector('body').style.overflowY = 'scroll';
        setTimeout(function() {
            document.getElementById('page-loader').style.display = 'none';
        }, 100)
    }, 1000);

    $('.card-project').bind('touchstart', function() {
        $('.card-project-bg').css('background-position', 'center 0')

        $(this).css('background-position', '50% 100%')
        $(this).find('.card-project-bg').css('background-position', '50% 100%')

    });


    const $projectBG = $('.card-project');
    $(document).mouseup(e => {
        if (!$projectBG.is(e.target) // if the target of the click isn't the container...
            &&
            $projectBG.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('.card-project-bg').css('background-position', 'center 0')
        }
    });



    // $('.card-project-bg').bind('touchend', function() {
    //     $(this).css('background-position', 'center 0')

    // });

})



// window.addEventListener('load', () => {
//     AOS
//     AOS.init({
//         duration: 1000,
//         easing: 'ease-in-out',
//         once: false,
//         mirror: false
//     })
// });

// loader
// document.getElementById('page-loader').style.opacity = 0;
// document.querySelector('body').style.overflowY = 'scroll';
// setTimeout(function() {
//     document.getElementById('page-loader').style.display = 'none';
// }, 100)

function DownloadFile(fileName) {
    //Set the File URL.
    var url = fileName;

    $.ajax({
        url: url,
        cache: false,
        xhr: function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 2) {
                    if (xhr.status == 200) {
                        xhr.responseType = "blob";
                    } else {
                        xhr.responseType = "text";
                    }
                }
            };
            return xhr;
        },
        success: function(data) {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([data], { type: "application/octetstream" });

            //Check the Browser type and download the File.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, fileName);
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                var a = $("<a />");
                a.attr("download", fileName);
                a.attr("href", link); 
                $("body").append(a);
                a[0].click();
                $("body").remove(a);
            }
        }
    });
};