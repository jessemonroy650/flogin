//
//    2014-12-14
//    2015-12-06 - Added makeLocaleDate(), makeUTC(), makeISO(), makeDate(), 
//                 tomorrow(); fixed yesterday()
//
var myDate = {
    now : new Date(),
    oneDay : (1000 * 60 * 60 * 24),

    utcNow    : (new Date()).toUTCString(),
    localeNow : (new Date()).toLocaleString(),
    /* yesterday() and tomorrow() are equivalent. */
    yesterday : (new Date((new Date()).setDate((new Date()).getDate() - 1))),
    tomorrow  : (function() {
        var x = (new Date()).setDate((new Date()).getDate() + 1);
        return (new Date(x));
    })(),

    isoDate     : (function () {
        var xx = (new Date()).toISOString();
        var result = xx.match(/(.+)\./);
        // This is now a string.
        return result[1];
    })(), // need to faux a function call or returns the function, not the result
    olderThanToday : function(today) {
        // Initializes to today.
        var currentDate = new Date();
        var lastDate = new Date(today);

        cdate = currentDate.toISOString();
        ldate = lastDate.toISOString();

        bResults = (cdate > ldate);
        return bResults;
    },
    getEpoch : function() { return (new Date()).getTime(); },
    getToday : function() { return (new Date()).toUTCString(); },
    makeLocaleDate : function(d) { return d.toLocaleDateString(); },
    makeUTC    : function(d) { return d.toUTCString(); },
    makeISO    : function(d) { return d.toISOString(); },
    makeDate   : function(d) { return d.toDateString(); }
}

