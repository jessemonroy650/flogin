
//
// http://stackoverflow.com/questions/11351689/detect-if-firebase-connection-is-lost-regained
// NOTE: must wait until connection is made; sometimes upto a 3 seconds.
var monitorCloudStatus = function (baseref) {
    var connectedRef = baseref.child(".info/connected");
    connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
            gCloudConnected = true;
            console.log("isCloudConnected");
        } else {
            gCloudConnected = false;
            console.log("NOT CloudConnected");
        }
    });
}

//
// https://www.firebase.com/docs/web/guide/user-auth.html#section-monitoring-authentication
// This call is asynchronous.
var monitorUserStatus = function (baseref, userref) {
    baseref.onAuth(function(authData) {
        if (authData) {
            // user authenticated with Firebase
            userref   = gFirebaseRef.child(authData.uid);
            gLoggedIn = true;
            console.log("isLoggedIn as ID: '" + authData.uid + "', Provider: " + authData.provider);
        } else {
            gLoggedIn = false;
            console.log("user logged out.")
        }
    });
}

// Firebase: Detecting if data exists. This snippet detects if a user ID is already taken
// https://gist.github.com/anantn/4323949
// This call is asynchronous.
var doesAccountExists = function (userId, baseref, callback) {
    var usersRef = new Firebase(baseref);
    usersRef.child(userId).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        callback(exists);
    });

}