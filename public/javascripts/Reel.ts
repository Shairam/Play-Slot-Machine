class Reel {
    public symList: Symbol[] = [];

    constructor() {

        
        this.symList = this.shuffle(this.addSymbols());
        
    }


    public addSymbols():Symbol[] {
        this.symList.push(new Symbol("redseven.png", 7));
        this.symList.push(new Symbol("bell.png", 6));
        this.symList.push(new Symbol("watermelon.png", 5));
        this.symList.push(new Symbol("plum.png", 4));
        this.symList.push(new Symbol("lemon.png", 3));
        this.symList.push(new Symbol("cherry.png", 2));
       

        return this.symList;
    }

    public  shuffle(array:Symbol[]): Symbol[]{
        
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
    }

    public getSymList(): Symbol[] {
        return this.symList;
    }
    
}