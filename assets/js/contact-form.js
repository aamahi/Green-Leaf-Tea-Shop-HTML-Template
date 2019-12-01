
/*
==================================================
=============================================
    Template Name: "Tea Shop - Green Leaf Tea Shop eCommerce HTML5 Tamplate"
    Template URI: http://sobuj4u.com/themexone/teashop/
    Description: "Green Leaf Tea Shop is a modern and functional html Template best suitable for your Tea Company & Online Tea Shop. Green Leaf Tea Shop has an intuitive visual interface and informative layout that looks wonderful on any platform, since itâ€™s fully responsive"
    Author: Al Amin Sobuj
    Author URI: http://www.sobuj4u.com
    Version: 1.0 
=============================================
==================================================
*/

(function ($, window, document, undefined) {
    'use strict';
    // Contact Form
    var $form = $('#contact_form');

    $form.submit(function (e) {
        // remove the error class
        $('.form_group').removeClass('has-error');
        $('.help-block').remove();

        // get the form data
        var formData = {
            'name' : $('input[name="u_name"]').val(),
            'email' : $('input[name="u_email"]').val(),
            'message' : $('input[name="u_massage"]').val()
        };

        // process the form
        $.ajax({
            type : 'POST',
            url  : 'process.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
            // handle errors
            if (!data.success) {
                if (data.errors.name) {
                    $('#name_field').addClass('has-error');
                    $('#name_field').find('.input_field').append('<span class="help-block">' + data.errors.name + '</span>');
                }
                if (data.errors.email) {
                    $('#email_field').addClass('has-error');
                    $('#email_field').find('.input_field').append('<span class="help-block">' + data.errors.email + '</span>');
                }
                 if (data.errors.email) {
                    $('#massage_field').addClass('has-error');
                    $('#massage_field').find('.input_field').append('<span class="help-block">' + data.errors.email + '</span>');
                }
            } else {
                // display success message
                $form.html('<div class="alert alert-success">' + data.message + '</div>');
            }
        }).fail(function (data) {
            // for debug
            console.log(data)
        });

        e.preventDefault();
    });
}(jQuery, window, document));
