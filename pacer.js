(function ($) {
    $("#court_type").on("change", function(){
        court_type = $("#court_type").val();
        console.log(court_type)
    });
    $("#court_region").on("change", function(){
        court_region = $("#court_region").val();
        console.log(court_region)
    });
    
    $("#party_name").on("change", function(){
        party_name = $("#party_name").val();
        console.log(party_name)
    });
    
    $("#filed_start_date").on("change", function(){
        filed_start_date = $("#filed_start_date").val();
        console.log(filed_start_date)
    }); 
    
    $("#filed_end_date").on("change", function(){
        filed_end_date = $("#filed_end_date").val();
        console.log(filed_end_date)
    }); 
    
    $("#closed_start_date").on("change", function(){
        closed_start_date = $("#closed_start_date").val();
        console.log(closed_start_date)
    }); 
    
    $("#closed_end_date").on("change", function(){
        closed_end_date = $("#closed_end_date").val();
        console.log(closed_end_date)
    }); 
    
    $("#case_num").on("change", function(){
        case_num = $("#case_num").val();
        console.log(case_num)
    }); 

    $("#ssn").on("change", function(){
        ssn = $("#ssn").val();
        console.log(ssn)
    }); 
    
    $("#ssn4").on("change", function(){
        ssn4 = $("#ssn4").val();
        console.log(ssn4)
    }); 
    
    $("#submit_button").on("click", function(){

        var filed_start_date = $("#filed_start_date").val();    
        var filed_end_date = $("#filed_end_date").val();
        var closed_start_date = $("#closed_start_date").val();
        var closed_end_date = $("#closed_end_date").val();
        var case_num = $("#case_num").val();
        var ssn = $("#ssn").val();
        var ssn4 = $("#ssn4").val();
        
        
        // window.location.href = encodeURI("https://www.enclout.com/api/v1/pacer/show.json?auth_token=hyxS7CQczefd7rWy9zsu&sel_court=" + court_type + "&sel_region=" + court_region + "&date_filed_start=" + filed_start_date + "&date_filed_end=" + filed_end_date + "&date_term_start=" + closed_start_date + "&date_term_end=" + closed_end_date + "&case_no=" + case_num + "&party=" + party_name + "&ssn=" + ssn + "&ssn4=" + ssn4)
        
        console.log(encodeURI("https://www.enclout.com/api/v1/pacer/show.jsonp?auth_token=hyxS7CQczefd7rWy9zsu&sel_court=" + court_type + "&sel_region=" + court_region + "&date_filed_start=" + filed_start_date + "&date_filed_end=" + filed_end_date + "&date_term_start=" + closed_start_date + "&date_term_end=" + closed_end_date + "&case_no=" + case_num + "&party=" + party_name + "&ssn=" + ssn + "&ssn4=" + ssn4));
        
        function jsonp(json){
                console.log(json)
        }        
                
        $.ajax({
            url:encodeURI("https://www.enclout.com/api/v1/pacer/show.jsonp?auth_token=hyxS7CQczefd7rWy9zsu&sel_court=" + court_type + "&sel_region=" + court_region + "&date_filed_start=" + filed_start_date + "&date_filed_end=" + filed_end_date + "&date_term_start=" + closed_start_date + "&date_term_end=" + closed_end_date + "&case_no=" + case_num + "&party=" + party_name + "&ssn=" + ssn + "&ssn4=" + ssn4),
            dataType: "jsonp",
            jsonpCallback:"jsonp",
            });
    });
}(jQuery));
