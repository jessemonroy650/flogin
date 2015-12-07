# README #
Date: 2015-11-28 (1448708146)


http://www.movable-type.co.uk/scripts/sha256.html
scripts-enc@movable-type.co.uk

1. accountCreate
2. accountLogin
3. accountLogout
4. accountChangeEmail
5. accountChangePassword
6. accountResetPassword

## Firebase API ##

1. createUser(credentials, onComplete) - {email,password}
2. authWithPassword(credentials, onComplete, [options]) - {email,password}, options={remember:[sessionOnly,none]}
3. unauth()
4. changeEmail(credentials, onComplete) - {oldEmail, password, newEmail}
5. changePassword(credentials, onComplete) - {email, oldPassword, newPassword}
6. resetPassword(credentials, onComplete) - {email}

## Parse API ##

1. new Parse.User(); set("username"), .set("password"), .set("email"); user.signUp(null, success(){}, error(){})
2. Parse.User.logIn("myname", "mypass", success(){}, error(){})
3. logOut()
4. setEmail
5. setPassword
6. Parse.User.requestPasswordReset("email", success(){}, error(){})

