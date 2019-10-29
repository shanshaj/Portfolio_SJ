
/*
 * =============================
 * Menu Controller Constants
 * =============================
 */
const MENU_OFF = 0;
const MENU_ON  = 1;


/*
 * =============================
 * Menu Controller Variables
 * =============================
 */
var menu_state = MENU_OFF;


/*
 * =============================
 * Menu Controller Action Callbacks
 * =============================
 */
$(document).ready(function () {
    $(".menu_overlay").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
        if (menu_state == MENU_OFF) $('.menu_overlay').css("visibility", "hidden");
    });
});


/*
 * =============================
 * Menu Controller Functions
 * =============================
 */
function menu_show_home () {
    $('.map_div').find('img').map(function () {
        $(this).css("filter", "blur(10px)");
    });
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_home () {
    $('.map_div').find('img').map(function () {
        $(this).css("filter", "");
    });
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}

function menu_show_mytrip () {
    $('.map_div').find('img, p').map(function () {
        $(this).css("filter", "blur(10px)");
    });
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_mytrip () {
    $('.map_div').find('img, p').map(function () {
        $(this).css("filter", "");
    });
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}

function menu_show_gallery () {
    $('.gallery_div').find('img').map(function () {
        $(this).css("filter", "blur(10px)");
    });
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_gallery () {
    $('.gallery_div').find('img').map(function () {
        $(this).css("filter", "");
    });
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}

function menu_show_contact () {
    $('.contact_div').map(function () {
        $(this).css("filter", "blur(10px)");
    });
    $('.contact_bg').css("filter", "blur(10px)");
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_contact () {
    $('.contact_div').map(function () {
        $(this).css("filter", "");
    });
    $('.contact_bg').css("filter", "");
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}

function menu_show_about () {
    $('.about_div').map(function () {
        $(this).css("filter", "blur(10px)");
    });
    $('.about_bg').css("filter", "blur(10px)");
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_about () {
    $('.about_div').map(function () {
        $(this).css("filter", "");
    });
    $('.about_bg').css("filter", "");
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}

function menu_show_detail () {
    // $('.detail_div').css("filter", "blur(10px)");
    $('.detail_content').css("filter", "blur(10px)");
    $('.menu').find('img').css("filter", "blur(10px)");
    $('.logo').find('img').css("filter", "blur(10px)");
    $('.menu_overlay').css("visibility", "visible");
    $('.menu_overlay').css("opacity", "1");
    menu_state = MENU_ON;
}
function menu_close_detail () {
    // $('.detail_div').map(function () {
    //     $(this).css("filter", "");
    // });
    $('.detail_content').css("filter", "");
    $('.menu').find('img').css("filter", "");
    $('.logo').find('img').css("filter", "");
    $('.menu_overlay').css("opacity", "0");
    menu_state = MENU_OFF;
}