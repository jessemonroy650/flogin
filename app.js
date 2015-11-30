/*
	Main App
	Date: 2015-11-29

*/
var gUserDataRef    = null;
var gCredentials    = {"email": undefined, "password": undefined};
var gUserData       = {"name": undefined,"phone": undefined,"uuid": undefined,"makemodel": undefined};
var gCloudConnected = undefined;
var gLoggedIn       = undefined;

var app = {

    initialize : function (device) {
        console.log("initialize");
    },

    signup : function () {
        console.log("app.signup");
        gCredentials.email    = $('#email').val();
        gCredentials.password = $('#password').val();
        console.log("gCredentials:",gCredentials);
        gUserData.name  = $('#name').val();
        gUserData.phone = $('#phone').val();
        gUserData.uuid  = $('#uuid').is(":checked");
        gUserData.makemodel = $('#makemodel').is(":checked");
        console.log("gUserData:",gUserData);
        /*
        account.create(gCredentials,
            function () { // success
            },
            function () { // error
            });
        */
        // clear out fields
        $('#email').val("");
        $('#password').val("");
        $('#name').val("");
        $('#phone').val("");
    },

    login : function (credentials) {
        console.log("app.login");
        gCredentials.email    = $('#email').val();
        gCredentials.password = $('#password').val();
        console.log("gCredentials:",gCredentials);
        /*
        account.login(gCredentials,
            function () { // success
            },
            function () { // error
            });
        */
        
    },

    logout : function () {
        console.log("app.logout");
        account.logout();
        gLoggedIn = false;
    },

    getAccount : function (callback) {
        console.log("app.getAccount");
    },

    updateAccount : function (accountData) {
        console.log("app.updateAccount");
    },

    resetPassword : function (email) {
        console.log("app.resetPassword");
    }
}