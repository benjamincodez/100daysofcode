// class extension

export class Animal {
    constructor(type, legs ){
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = 'loud Noise '){
        console.log(sound);
       
    }
    get metaData(){
        return `type: ${this.type}, legs: ${this.leg}`;
    }
    // the static keyword
    static return10(){
        return 10;
    }
}

export class Cat extends Animal {
    // constructor(types, legs, tail){
    //     super(type,legs);
    //     this.tail = tail;

    // }
    makeNoise(sound  = 'meow'){
        console.log(sound)
    }
    
}

