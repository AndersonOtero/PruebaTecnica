import { Temperature } from "./temperature.model";

export class City {
    
    public NameEntity:string;    
    public Temperatures?: Array<Temperature>;

    constructor(){
        this.NameEntity = "";
        this.Temperatures = new Array<Temperature>();
    }
}