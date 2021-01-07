export class CartData{
    id:number;
    name: string;
    imgPath: string;
    price: number;
    quatity:number;

    constructor(id:number, name: string, imgPath: string,  price: number){
            this.id=id;
            this.name=name;
            this.imgPath=imgPath;
            this.price=price;
            this.quatity=0;
    }
}