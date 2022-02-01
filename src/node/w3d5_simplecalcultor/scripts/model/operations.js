var myFrame = (function(){
    var defaultFrame = `
    <!DOCTYPE html>
    <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
    </head>
    <body>
        <p>The Answer is: %s</p>
        <hr>
        <p><a href="/back.js"> GO BACK</a></p>
    </body>
    </html>
    `;
    return {
        getHTMFrame:defaultFrame,
    } 
})();

exports.add = function (first, second) {
    var sum = parseInt(first) + parseInt(second);
    return myFrame.getHTMFrame.replace('%s', sum);
};
exports.subtract = function (first, second) {
    var sub = parseInt(first) - parseInt(second);
    return myFrame.getHTMFrame.replace('%s', sub);
};
exports.multiply = function (first, second) {
    var mul = parseInt(first) * parseInt(second);
    return myFrame.getHTMFrame.replace('%s', mul);
};
exports.divide = function (first, second) {
    var divison = parseInt(first) / parseInt(second);
    return myFrame.getHTMFrame.replace('%s', divison);
};