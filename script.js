
(function() {
    var names = ["Gowtham", "John", "Jenifer", "Jason", "gowtham", "Frank", "paige", "kim", "sheldon", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();