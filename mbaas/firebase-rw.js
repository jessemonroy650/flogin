


//
//    Read Data
//
var readData = function (dataRef, callback, err) {

    if (dataRef) {
        dataRef.once('value', function(datasnapshot) {
            var val = datasnapshot.hasChildren();
            if (val) {
                if ( typeof callback === 'function' ) {
                    console.log("readData callback()");
                    callback(datasnapshot.val());
                }
                console.log("readData has children/data." + JSON.stringify(datasnapshot.val()));
            } else {
                console.log("readData found no Data.");
            }
        });
    } else {
        console.log("readData has no reference.");
    }
};
//
//    Write some actual data
//
var writeData = function (dataRef, data, callback, err) {

    if (dataRef) {
        dataRef.set(data, function(e) {
            if (e) {
                console.log("error writeData:" + e.code);
            } else {
                console.log("data write succeed");
            }
        });
    } else {
        console.log("writeData has no reference.");
    }
};
