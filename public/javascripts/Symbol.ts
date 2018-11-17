class Symbol {
    imageSrc: String;
    value: Number;

    constructor(src: String, val: Number) {
        this.imageSrc = src;
        this.value = val;

    }

    public getImagesrc(): String{
        return this.imageSrc;
    }

    public getValue(): Number {
        return this.value;
    }

}