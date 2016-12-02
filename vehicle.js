(function ($) {
    // declare global variables for vehicle form
    var vehicle_year, radio_form, vehicle_make, vehicle_model, vehicle_style, vehicle_color, vehicle_condition, vehicle_mileage, vehicle_zipcode, vehicle_tmv;
    
    // on change of vehicle_year_form, do the following
    $("#vehicle_year_dropdown").on("change", function() {
        
        // assign vehicle_year to variable
        vehicle_year = $("#vehicle_year_dropdown").val();
                            
        // enable next form
        $("#vehicle_make_dropdown").prop('disabled', false);

        // return subsequent forms to default
        $("#vehicle_make_dropdown").val("");
        $("#vehicle_model_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        $("#vehicle_trim_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        $("#vehicle_color_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = true;
            radio_form[i].checked = false;
        }
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
    });
                        
    // on change of vehicle_make_form, do the following
    $("#vehicle_make_dropdown").on("change", function() {
                            
        // assign vehicle_make to variable
        vehicle_make = $("#vehicle_make_dropdown").val();
                            
        // return subsequent forms to default
        $("#vehicle_model_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        $("#vehicle_trim_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        $("#vehicle_color_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = true;
            radio_form[i].checked = false;
        }
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
                            
        // get models in json object from EDMUNDS API
        $.getJSON("https://api.edmunds.com/api/vehicle/v2/" + vehicle_make + "/models?fmt=json&year=" + vehicle_year + 
        "&api_key=2skrh7ku3dkgzen67zwxcszy", function (returned_data) {

            // if EDMUNDS API returns no models for given year and make
            if(returned_data.modelsCount == 0){

                // alert user if no models exist for given make and year
                alert("No models available for selected year and make. Please try again...");
                }
                        
            // otherwise
            else{
  
                /// enable next form
                $("#vehicle_model_dropdown").prop('disabled', false);

                // populate vehicle_model_form with id and name pairs
                $.each(returned_data.models, function () {
                    $("#vehicle_model_dropdown").append($("<option></option>").val(this['id']).html(this['name']));
                });                        
            }
        });
    });
                        
    // on change of vehicle_model_form, do the following
    $("#vehicle_model_dropdown").on("change", function() {
                            
        // assign vehicle_model to variable
        vehicle_model = $("#vehicle_model_dropdown").find('option:selected').text();
                            
        // return subsequent forms to default
        $("#vehicle_trim_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        $("#vehicle_color_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = true;
            radio_form[i].checked = false;
        }
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
                            
        // get trims in json object from EDMUNDS API
        $.getJSON("https://api.edmunds.com/api/vehicle/v2/" + vehicle_make + "/" + vehicle_model + 
        "?fmt=json&year=" + vehicle_year + "&api_key=2skrh7ku3dkgzen67zwxcszy", function (returned_data){
                    
            // if EDMUNDS API returns no trims for given year and make
            if(returned_data.years[0].styles == undefined){

                // alert user if no models exist for given make and year
                alert("No trims available for selected year, make, and model.  Please try again...");
                }
                        
            // otherwise
            else{
                                
                // enable next form
                $("#vehicle_trim_dropdown").prop('disabled', false);
                            
                // populate vehicle_trim_form with style and trim pairs
                $.each(returned_data.years[0].styles, function () {
                    $("#vehicle_trim_dropdown").append($("<option></option>").val(this['id']).html(this['name']));
                });
            }
        });
    });
                        
    // on change of vehicle_trim_form, do the following
    $("#vehicle_trim_dropdown").on("change", function() {
                            
        // assign selected values to variables
        vehicle_style = $("#vehicle_trim_dropdown").val();
                
        // return subsequent forms to default
        $("#vehicle_color_dropdown").val("").prop('disabled', true).find("option:gt(0)").remove();
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = true;
            radio_form[i].checked = false;
        }
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
                
        // get colors in json from EDMUNDS API
        $.getJSON("https://api.edmunds.com/api/vehicle/v2/styles/" + vehicle_style + 
        "/colors?fmt=json&api_key=2skrh7ku3dkgzen67zwxcszy", function (returned_data){
                    
            // if EDMUNDS API returns no trims for given year and make
            if(returned_data == null){ // NOT SURE IF THIS WORKS

                // alert user if no models exist for given make and year
                alert("No colors available for selected year, make, model, and trim.  Please continue...");
                        
                // skip vehicle_color_form and enable vehicle_condition_form
                radio_form = document.getElementById("vehicle_condition_radio").elements;
                for (var i = 0; i < radio_form.length; ++i) {
                    radio_form[i].disabled = true;
                    radio_form[i].checked = false;
                }
            }
                        
            // otherwise
            else{
                                
                // enable next form
                $("#vehicle_color_dropdown").prop('disabled', false);
                                
                // populate vehicle_color_form with 
                $.each(returned_data.colors, function () {
                    $("#vehicle_color_dropdown").append($("<option></option>").val(this['id']).html(this['name']));
                });
            }
        });
    }); 
                        
    // on change of vehicle_color_form, do the following
    $("#vehicle_color_dropdown").on("change", function() {
                            
        // assign vehicle_color to variable
        vehicle_color = $("#vehicle_color_dropdown").val();
                
        // return subsequent forms to default   
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = true;
            radio_form[i].checked = false;
        }
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
                
        // enable next form
        radio_form = document.getElementById("vehicle_condition_radio").elements;
        for (var i = 0; i < radio_form.length; ++i) {
            radio_form[i].disabled = false;
            radio_form[i].checked = false;
        }
    });
                        
    // on change of vehicle_condition_form
    $("#vehicle_condition_radio").on("change", function() {
                            
        // assign vehicle_condition to variable
        vehicle_condition = $("[name=vehicle_condition_input]:checked").val();
                
        // return subsequent forms to default
        $("#vehicle_mileage_input").val("").prop('disabled', true);
        $("#vehicle_zipcode_input").val("").prop('disabled', true);
        $("#vehicle_submit_button").prop('disabled', true);
                
        // enable next form
        $("#vehicle_mileage_input").prop('disabled', false);
    });
                        
    // on change of vehicle_condition_form
    $("#vehicle_mileage_input").on("change", function() {
                            
        // assign vehicle_mileage to variable
        vehicle_mileage = $("#vehicle_mileage_input").val();
                
        // validate vehicle_zipcode
        if(vehicle_mileage == "" || isNaN(vehicle_mileage) || vehicle_mileage.length < 1 || vehicle_mileage.length > 6){
            alert("Please provide a valid vehicle mileage.");
            $("#vehicle_mileage_input").focus();
                    
            // return subsequent forms to default
            $("#vehicle_zipcode_input").prop('disabled', true);
            $("#vehicle_submit_button").prop('disabled', true);
        }
        // otherwise
        else{
            // return subsequent forms to default   
            $("#vehicle_zipcode_input").val("").prop('disabled', true);
                    
            // enable next form
            $("#vehicle_zipcode_input").prop('disabled', false);
        }
    });
                        
    $("#vehicle_zipcode_input").on("change", function() {
                           
        // assign vehicle_zipcode variable
        vehicle_zipcode = $("#vehicle_zipcode_input").val();
                
        // validate vehicle_zipcode
        if(vehicle_zipcode == "" || isNaN(vehicle_zipcode) || vehicle_zipcode.length != 5 ){
            alert( "Please provide a zip in the format #####." );
            $("#vehicle_zipcode_input").focus();
                    
            // return subsequent form to default
            $("#vehicle_submit_button").prop('disabled', true);
        }
                
        // otherwise
        else{
                    
            // enable vehicle_submit_button
            $("#vehicle_submit_button").prop('disabled', false);
        }
    });
                        
    $("#vehicle_submit_button").on("click", function() {
                
        // if vehicle_color is undefined, do the following
        if(vehicle_color == undefined){
                    
            // get tmv in json from EDMUNDS API
            $.getJSON("https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid=" + vehicle_style + 
            "&condition=" + vehicle_condition + "&mileage=" + vehicle_mileage + "&zip=" + vehicle_zipcode + 
            "&fmt=json&api_key=2skrh7ku3dkgzen67zwxcszy", function (returned_data){
                        
                // assign vehicle_tmv to variable
                vehicle_tmv = returned_data.tmv.totalWithOptions.usedTmvRetail;
                        
                // display vehicle_tmv
                $("#vehicle_tmv_output").html("True Market Value = " + vehicle_tmv);
            });
        }
                
        // otherwise    
        else{
                    
            // get tmv in json from EDMUNDS API
            $.getJSON("https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid=" + vehicle_style + 
            "&condition=" + vehicle_condition + "&mileage=" + vehicle_mileage + "&zip=" + vehicle_zipcode + 
            "&color=" + vehicle_color + "&fmt=json&api_key=2skrh7ku3dkgzen67zwxcszy", function (returned_data){
                        
                // assign vehicle_tmv to variable
                vehicle_tmv = returned_data.tmv.totalWithOptions.usedTmvRetail;
                        
                // display vehicle_tmv
                $("#vehicle_tmv_output").html("True Market Value = " + vehicle_tmv);
            });
        }
    });
}(jQuery));