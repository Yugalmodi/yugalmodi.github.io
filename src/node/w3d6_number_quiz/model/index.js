var database = require('./database');

var myFrame = (function(){
    function getHTMFrame(count, score){
        var counterView =   ()=>{
            if (count<5) {
                return  `
                <p> Guess the number sequence is </p>
                <p>${String(database.questions()[count])}</p>
                <form action="http://localhost:3000/submit.js" >
                    <label>your answer is</label>
                    <input type="text" name="ansID"/>
                    <button>Submit</button>
                </form>
                `;
            } else{
                return `<p> You have completed the number quiz, with a score of ${String(score)} out of ${String(count)}</p>`;
            }
        }
        return `
        <!DOCTYPE html>
        <html>
            <head><meta charset=\"utf-8\"/>
            <title>Number Quiz</title>
        </head>
        <body>
            <h1>Number Quiz</h1>
            <p>The Current Score is: ${String(score)} </p>
            ${String(counterView())}
        </body>
        </html>
        `;
    }
    return {
        getHTMFrame:getHTMFrame,
    } 
})();

exports.main = function (count, score) {
    return myFrame.getHTMFrame(count, score);
}