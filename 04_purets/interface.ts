interface TakePhoto{
    cameraMode:String,
    filter:String,
    burst:number
}

interface createStory{
    createStory():void
}

// if some class is implementing the interface it must have all the properties and more
class instagram implements TakePhoto{
    constructor(
        public cameraMode:String,
        public filter:String,
        public burst:number
    ){}
}

class Youtube implements TakePhoto,createStory{
    constructor(
        public cameraMode:String,
        public filter:String,
        public burst:number,
        public short:string // You can add more properties
    ){}

    createStory(): void {
        console.log('Story created');
        
    }
}