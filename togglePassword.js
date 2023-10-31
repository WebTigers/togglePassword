/**
 * togglePassword
 * Creates an icon on every password field to view or hide the password. The default state is hidden.
 * Version: 1.0
 * Create Date: October 31, 2023
 * Author: K. Beau Beauchamp
 * Organization: WebTigers
 * Dependencies: jQuery, Font Awesome Free
 * License: MIT
 */
( function( $ ) {

    let Class = {

        init : function( ) {
            $( document ).ready( function() {

                Class.pw_toggle();

            });
        },
        pw_toggle : function () {

            $('input[type="password"]').each(function (i, el) {

                let $icon = $('<i class="fa fa-eye" style="float: right; margin-right: 10px; margin-top: -25px; position: relative; z-index: 2;"></i>');

                let toggle_type = function () {
                    if ($(this).prev().attr('type') === 'password') {
                        $(this).prev().attr('type', 'text');
                        $(this).toggleClass('fa-eye fa-eye-slash');
                    } else {
                        $(this).prev().attr("type", "password");
                        $(this).toggleClass('fa-eye-slash fa-eye');
                    }
                };

                let init = function (target) {
                    $(target).wrap('<div style="position:relative"></div>');
                    let fs = $(target).css('font-size');
                    $icon.css('font-size', fs);
                    $(target).parent().append( $icon );
                    $(target).parent().find("i").on("click", toggle_type);
                };

                init(el);

            });

        }

    };

    $.fn.view_passwords = function( method ) {
        if ( Class[method] ) {
            return Class[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return Class.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist.' );
        }
    };

    $().view_passwords();

})( jQuery );
