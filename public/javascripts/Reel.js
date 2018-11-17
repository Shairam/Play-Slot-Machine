var Reel = /** @class */ (function () {
    function Reel() {
        this.symList = [];
        this.symList = this.shuffle(this.addSymbols());
    }
    Reel.prototype.addSymbols = function () {
        this.symList.push(new Symbol("/assets/images/redseven.png", 7));
        this.symList.push(new Symbol("/assets/images/bell.png", 6));
        this.symList.push(new Symbol("/assets/images/watermelon.png", 5));
        this.symList.push(new Symbol("/assets/images/plum.png", 4));
        this.symList.push(new Symbol("/assets/images/lemon.png", 3));
        this.symList.push(new Symbol("/assets/images/cherry.png", 2));
        return this.symList;
    };
    Reel.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Reel.prototype.getSymList = function () {
        return this.symList;
    };
    return Reel;
}());
