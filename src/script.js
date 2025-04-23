window.onload = function () {
    function random(array) {
        return (Math.floor(Math.random() * array.length));
    }
    let who = ['My cat', 'Madonna', 'The traffic', 'The doctor'];
    let action = ['ate', 'exploded', 'ruined', 'farted'];
    let what = ['my interview', 'my phone', 'my clothes', 'Caracas'];
    let when = ['in my office yesterday', 'during my zumba class', 'on  my bed this morning', 'while I was talking to the pope'];


    let excuse = who[random(who)] + " " + action[random(action)] + " " + what[random(what)] + " " + when[random(when)] + ".";
    console.log(excuse)
    document.getElementById("excuse").innerHTML = excuse;
};