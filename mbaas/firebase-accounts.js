/*
	Firebase user accounts
	Date: 2015-11-28

    NOTE: The firebase specific routines must be fired before any of the
    subroutines in this module. BUT THIS MODULE (FILE) MUST LOAD FIRST.

*/
var gMybaseRef      = new Firebase('https://user-login.firebaseio.com/');
var gFirebaseRef    = new Firebase('https://user-login.firebaseio.com/users');

var sErrorMsgCreate   = {'EMAIL_TAKEN': "That email is in use on this system.", 'INVALID_EMAIL': "You gave me an invalid email address."};
var sErrorMsgLogin    = {'LOGIN_FAILED': "Your login did not work. Your email or password was wrong. I don't know which is wrong."};
var sErrorMsgLostPass = {'INVALID_USER': "The specified user account does not exist."};

var account = {

	//
	create : function (obj, success, error) {
        console.log("account.create:");
        credentials = {"email": obj.email, "password": obj.password};
        console.log("account.create: credentials", credentials);

        // detectCollision()
        doesAccountExists(obj.email, gFirebaseRef, function (exists) {
            console.log("callback of doesAccountExists");
            if (! exists) {
                // Firebase.createUser() 
                // https://www.firebase.com/docs/web/api/firebase/createuser.html
                // 2015-09-03 - Added 'userData', new to API
                gFirebaseRef.createUser(credentials, function(err, userData) {
                    if (! err) {
                        console.log('createUser() succeeded with ' + userData.uid);
                        account.login(credentials, function(payload) {
                            // payload.uid payload.provider payload.auth payload.expires
                            console.log('Create account and Login successfully with payload:', payload);
                            writeData(gUserDataRef,
                                {'email': obj.email, 'phone': obj.phone, 'uid': userData.uid},
                                function() {success("account created and data added");},
                                function() {success("Failed create account");}
                                );
                            
                        }, function(err) {
                            console.error("Error with authWithPassword, which should not happen.");
                        });
                    } else {
                        console.log('createUser() Failed!', err);
                        if ('function' === typeof error) {
                            error(err.code);
                        }
                    }
                });
            } else {
                console.log(obj.email + " already exists:" + exists);
                if ('function' === typeof error) {
                    error("email already exists");
                }
            }
        });
	},

	//
	login : function(obj, success, error) {
        credentials = {"email": obj.email, "password": obj.password};

        // Log me in
        gFirebaseRef.authWithPassword(credentials, function(err, authData) {
            if (! err) {
                if ( typeof success === 'function' ) {
                    success(authData);
                }
                //console.log('Authenticated successfully with payload:', JSON.stringify(authData));
            } else {
                if ( typeof error === 'function' ) {
                    //error(err);
                }
                console.error('Login Failed: ' + "err.code", JSON.stringify(err.code));
                console.error(sErrorMsgLogin[err.code]);
            }
        });
	},

	//
	logout : function () {
        gFirebaseRef.unauth();
	},

	//
	changeEmail : function () {
	},

	//
	changePassword : function () {
	},

    getAccount : function () {
    },

    setAccount : function () {
    },

	//
	resetPassword : function(obj, success, error) {
        var creds = {'email':obj.email}
        gMybaseRef.resetPassword(creds, function(err) {
            if (! err){
                if ( typeof success === 'function' ) {
                    success();
                }
                console.log("email away.");
            } else {
                if ( typeof error === 'function' ) {
                    error(err);
                }
                console.log("err.code", JSON.stringify(err.code));
                console.log(sErrorMsgLostPass[err.code]);
            }        
        });
	}
};
