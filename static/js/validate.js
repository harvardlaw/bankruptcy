$(document).ready(function() {

    // on keyup of question 1
    var $input1 = $('#x-q1'),
        $submit1 = $('#b-q1');

    $submit1.attr('disabled', 'disabled');

    $input1.keyup(function () {
        $input1.data('empty', 'false');

        $input1.each(function () {
            if ($(this).val() === '') {
                $input1.data('empty', 'true');
            }
        });

        if ($input1.data('empty') === 'true') {
            $submit1.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
        } else {
            $submit1.removeAttr('disabled').attr('title', 'click to submit');
        }
    });

    // on keyup of question 2
    var $input2 = $('#x-q2'),
        $submit2 = $('#b-q2');

    $submit2.attr('disabled', 'disabled');

    $input2.keyup(function () {
        $input2.data('empty', 'false');

        $input2.each(function () {
            if ($(this).val() === '') {
                $input2.data('empty', 'true');
            }
        });

        if ($input2.data('empty') === 'true') {
            $submit2.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
        } else {
            $submit2.removeAttr('disabled').attr('title', 'click to submit');
        }
    });

    // on keyup of question 8
    var $submit8 = $('#b-q8');

    $submit8.attr('disabled', 'disabled');

    $sumbit8 = $('#b-q8')
    $submit8.attr('disabled', 'disabled');

    $("#vehicle_zipcode_input").keyup(function () {
        $("#vehicle_zipcode_input").data('empty', 'false');

        $("#vehicle_zipcode_input").each(function () {
            if ($(this).val() === '') {
                $("#vehicle_zipcode_input").data('empty', 'true');
            }
        });

        if ($("#vehicle_zipcode_input").data('empty') === 'true') {
            $submit8.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
        } else {
            $submit8.removeAttr('disabled').attr('title', 'click to submit');
        }
    });
});