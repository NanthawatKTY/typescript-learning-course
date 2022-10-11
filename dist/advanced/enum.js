"use strict";
var GameMode;
(function (GameMode) {
    GameMode["Easy"] = "\u0E07\u0E48\u0E32\u0E22";
    GameMode["Medium"] = "\u0E1B\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07";
    GameMode[GameMode["Hard"] = 30] = "Hard";
})(GameMode || (GameMode = {}));
const select = GameMode.Medium;
console.log(select);
