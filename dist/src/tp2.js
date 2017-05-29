"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberToString;
(function (NumberToString) {
    NumberToString[NumberToString["un"] = 0] = "un";
    NumberToString[NumberToString["deux"] = 1] = "deux";
    NumberToString[NumberToString["trois"] = 2] = "trois";
    NumberToString[NumberToString["quatre"] = 3] = "quatre";
    NumberToString[NumberToString["cinq"] = 4] = "cinq";
    NumberToString[NumberToString["six"] = 5] = "six";
    NumberToString[NumberToString["sept"] = 6] = "sept";
    NumberToString[NumberToString["huit"] = 7] = "huit";
    NumberToString[NumberToString["neuf"] = 8] = "neuf";
})(NumberToString || (NumberToString = {}));
;
function returnPeopleAndLength(peopleTab) {
    if (peopleTab === void 0) { peopleTab = ['Miles', 'Mick']; }
    return peopleTab.map(function (people) { return [people, people.length]; });
}
exports.returnPeopleAndLength = returnPeopleAndLength;
function displayPeopleAndLength(peopleTab, literal) {
    if (literal === undefined || literal === false) {
        returnPeopleAndLength(peopleTab)
            .forEach(function (_a) {
            var name = _a[0], size = _a[1];
            return console.log(name + " contient " + size + " caract\u00E8res");
        });
        return;
    }
    returnPeopleAndLength(peopleTab)
        .forEach(function (_a) {
        var name = _a[0], size = _a[1];
        if (size <= 9) {
            console.log(name + " contient " + NumberToString[size - 1] + " caract\u00E8res");
        }
    });
}
exports.displayPeopleAndLength = displayPeopleAndLength;
