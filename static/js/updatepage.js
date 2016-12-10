function update_site(xyz, v) {

    toasty(v, xyz);
    chameleon(xyz, v);
    var alldatadictionary = getcode(v)
    cb(alldatadictionary);
    return true;
}


$(document).ready(function() {
  $('.modal-trigger').leanModal();
});


function ajaxpost(sdata) {
        $.ajax({
            type : "POST",
            url : "/finished",
            data: sdata,
            contentType: 'application/json;charset=UTF-8',
            success: function(result) {
                $("body").html(result);
            }
        });
}


function cb(alldatadictionary) {
    $.post( "/postmethod", {

        all_data:JSON.stringify(alldatadictionary)},

        function( data ) {
        // alert(data['from'])
        //     addtolist()
            if (data['remove'] != "") {             // REMOVED [0] because of error
                $(data['remove']).fadeOut(500);     // REMOVED [0] because of error
            }

            $(data['to']).insertAfter(data['from']);
            $(data['to']).fadeIn(1000);

            // alert(data['remove']);


            if (data['end'] == "YES") {
                ajaxpost(JSON.stringify(alldatadictionary));
            };

            $("html, body").delay(555).animate({scrollTop: $(data['from']).offset().top + 500}, 500).delay(500);
    });
}

function getcode(v) {
    var dict = {};
    dict['current'] = v;

    var y = document.getElementsByClassName("btn-large waves-effect waves-torchred white");
    for (i = 0; i < y.length; i++) {
        dict[y[i].name] = y[i].value;
    }

    var xc = document.getElementsByClassName('validate valid');
    for (i = 0; i < xc.length; i++) {
        dict[xc[i]['id'].substring(2)] = xc[i].value;
    }

    var veh = document.getElementById('vehicle_tmv_output').value
    dict['veh_value'] = veh
    return dict
}
