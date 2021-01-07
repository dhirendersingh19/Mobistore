export class Products{
    id:number;
    name: string;
    imgPath: string;
    ram: number;
    screenSize: number;
    megaPixel: string;
    battery: number;
    processor: string;
    price: number;
    stock:number;
    

    constructor(id:number, name: string, imgPath: string, 
        ram: number, screenSize: number, 
        megaPixel: string, battery: number, processor: string, price: number,stock:number){
            this.id=id;
            this.name=name;
            this.imgPath=imgPath;
            this.ram=ram;
            this.megaPixel=megaPixel;
            this.screenSize=screenSize;
            this.battery=battery;
            this.processor=processor;
            this.price=price;
            this.stock=stock;
    }
}