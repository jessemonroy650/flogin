/*
    Buttons
    Date: 2015-11-29
*/
$('#button-login').click(function() {
    console.info("#button-login");
    if ($('#email').val() && $('#password').val()) {
        app.login();
    } else {
        console.log("No email/password - email:" + $('#email').val());
        // give user feedback, we require email and password
        myMessage.myMessage('message','error', "'email' and 'password' required.", 4000);
    }
});

$('#button-logout').click(function() {
    console.info("#button-logout");
    app.logout();
});

$('#button-signup').click(function() {
    console.info("#button-signup");
    if ($('#email').val() && $('#password').val()) {
        app.signup();
    } else {
        console.log("No email/password - email:" + $('#email').val());
        // give user feedback, we require email and password
        myMessage.myMessage('message','error', "'email' and 'password' required.", 4000);
    }
});

