function toasty(title, valuelist) {
    // store user's first name in variable first_name
    var first_name = document.getElementById('x-q1').value.split(' ');

    // toast if greeting
    if (title == 'q01.0') {
        Materialize.toast('Hello, ' + first_name[0] + '!', 3000)
    }

    // to
    if (title == 'q02.0') {

    }

    // toast if employed
    if (title == 'q03.0') {
        Materialize.toast('Way to go, ' + first_name[0] + '!', 3000)
    }
}

function chameleon(valuelist, title){
    var x = document.getElementsByName(valuelist);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].value == title)
            x[i].className = ("btn-large waves-effect waves-torchred white");
        else {
            x[i].className = ("btn-large waves-effect waves-torchred");
            }
        }
    }
