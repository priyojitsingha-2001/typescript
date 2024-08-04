abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 8;
    }
}

// const obj=new TakePhoto("test",'Test'); you cacnot create objects of abstract class

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter);
    }
    getSepia(): void {}
    
}

// const obj=new Instagram("test","Test"); // you can create objetcs of class that inherits it
