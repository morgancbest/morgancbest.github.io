$(document).ready(function () {
    $(".nav-item a").click(function () {
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
        $(this).tab('show');
    });
});



$(document).ready(function () {
    $('#managerId').focusout(function () {
        var value = $("#managerId").val();
        if (value.length == 4 && Math.floor(value) == value && $.isNumeric(value)) {
            $("#managerId").addClass('is-valid');
            $("#managerId").removeClass('is-invalid');
            $("#badManagerId").hide();
        } else {
            $("#managerId").removeClass('is-valid');
            $("#managerId").addClass('is-invalid');
            $("#badManagerId").show();

        }
    });
});

$(document).ready(function () {
    $('#username').focusout(function () {
        var value = $("#username").val();
        if (value.length >= 5 && value.length <= 25) {
            $("#username").addClass('is-valid');
            $("#username").removeClass('is-invalid');
            $("#badUsername").hide();

        } else {
            $("#username").removeClass('is-valid');
            $("#username").addClass('is-invalid');
            $("#badUsername").show();

        }
    });
});

$(document).ready(function () {
    $('#email').focusout(function () {
        var value = $("#email").val();
        if (value.includes('@')) {
            $("#email").addClass('is-valid');
            $("#email").removeClass('is-invalid');
            $("#badEmail").hide();
        } else {
            $("#email").removeClass('is-valid');
            $("#email").addClass('is-invalid');
            $("#badEmail").show();
        }
    });
});

$(document).ready(function () {
    $('#password').focusout(function () {
        var upperCase = new RegExp('[A-Z]');
        var value = $("#password").val();
        if (value.length >= 5 && value.match(upperCase)) {
            $("#password").addClass('is-valid');
            $("#password").removeClass('is-invalid');
            $("#badPassword").hide();
        } else {
            $("#password").removeClass('is-valid');
            $("#password").addClass('is-invalid');
            $("#badPassword").show();
        }
    });
});

$(document).ready(function () {
    $('#verifyPassword').focusout(function () {
        var value = $("#password").val();
        var value2 = $("#verifyPassword").val();
        var upperCase = new RegExp('[A-Z]');
        if ((value == value2) && value.length >= 5 && value.match(upperCase)) {
            $("#verifyPassword").addClass('is-valid');
            $("#verifyPassword").removeClass('is-invalid');
            $("#badVerifyPassword").hide();
        } else {
            $("#verifyPassword").removeClass('is-valid');
            $("#verifyPassword").addClass('is-invalid');
            $("#badVerifyPassword").show();
        }
    });
});

$(document).ready(function () {
    $('button:contains("Save changes")').click(function () {
        $('.update-me').html('Thursday');
    });
});

$(document).ready(function () {
    $('button:contains("Generate")').click(function () {
        var i = 0;
        var timer = setInterval(function () {
            $(".progress-bar").attr('aria-valuenow', i++).css('width', i++ + "%");
        }, 30);
        setTimeout(function () {
            $('a:contains("Schedule")').click();
            clearInterval(timer);
            $(".progress-bar").hide();
            $(".progress-bar").attr('aria-valuenow', 0).css('width', "0%");
            $(".progress-bar").show();
        }, 4000);
    });
});

// $(document).ready(function () {
//     $('tr').click(function () {
//         if ($(this).hasClass('row-active')) {
//             $(this).removeClass('row-active')
//         } else {
//             $(this).addClass('row-active');
//         }
//     });
// });


$(document).ready(function () {
    $('.myDropdown').click(function () {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $('.dropdown-menu').removeClass('show')
        } else {
            $(this).addClass('show');
            $('.dropdown-menu').addClass('show');
        }
    });
});


$(document).ready(function () {
    $('button:contains("Start Edit")').click(function () {
        $('tbody button').removeClass('hidden');
        $('button:contains("Start Edit")').addClass('hidden');
        $('button:contains("Stop Edit")').removeClass('hidden');


    });
});

$(document).ready(function () {
    $('button:contains("Stop Edit")').click(function () {
        $('tbody button').addClass('hidden');
        $('button:contains("Start Edit")').removeClass('hidden');
        $('button:contains("Stop Edit")').addClass('hidden');
    });
});

