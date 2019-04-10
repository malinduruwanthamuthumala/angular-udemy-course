export class Recepie{
    public name:string;
    public description:string;
    public ImagePath:string; 

    constructor(name:string , desc:string,imagepath:string){
        this.name=name;
        this.description=desc;
        this.ImagePath=imagepath
    }
}