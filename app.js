/*
	Main App
	Date: 2015-11-29

*/
var gUserDataRef    = null;
//var gCredentials    = {"email": undefined, "password": undefined};
//var gUserData       = {"name": undefined,"phone": undefined,"uuid": undefined,"makemodel": undefined};
var gCloudConnected = undefined;
var gLoggedIn       = undefined;

var app = {

    initialize : function (device) {
        console.log("app.initialize");
    },

/* Move signup to stand-alone on 2015-12-07
    signup : function () {
        console.log("app.signup");
        var okGetUU = $('#uuid').is(":checked");
        var okGetMM = $('#makemodel').is(":checked");
        gUserData.email       = $('#email').val();
        gUserData.password    = $('#password').val();
        gUserData.name        = $('#name').val();
        gUserData.phone       = $('#phone').val();
        gUserData.uuid      = false;
        gUserData.makemodel = false;
        gUserData.cordova   = false;
        gUserData.platform  = false;
*/
        // get device info only if we are on the device.
/*
        if (gTheDevice != undefined) {
            gUserData.uuid      = (okGetUU) ? device.uuid : false;
            gUserData.makemodel = (okGetMM) ? device.model : false;
            gUserData.cordova   = device.cordova;
            gUserData.platform  = device.platform + ";" + device.version;
        }
*/
/*
        console.log("gUserData:", gUserData);
        //console.log(sErrorMsgLostPass[INVALID_USER]);
        account.create(gUserData,
            function (data) { // success
                myMessage.myMessage('message','success', "Account created", 6000);
            },
            function (error) { // error
                myMessage.myMessage('message','error', "Error creating account:" + error, 8000);
            });
        //
        // clear out fields
        $('#email').val("");
        $('#password').val("");
        $('#name').val("");
        $('#phone').val("");
    },
*/
    login : function (credentials) {
        console.log("app.login");
        gCredentials.email    = $('#login-email').val();
        gCredentials.password = $('#login-password').val();
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
        /*
        account.getAccount(<<PARMS>>,
            function () { // success
            },
            function () { // error
            });
        */
    },

    setAccount : function (callback) {
        console.log("app.setAccount");
        /*
        account.setAccount(<<PARMS>>,
            function () { // success
            },
            function () { // error
            });
        */
    },

    resetPassword : function (email) {
        console.log("app.resetPassword");
        gCredentials.email    = email;
        /*
        account.resetPassword(email,
            function () { // success
            },
            function () { // error
            });
        */
    }
}