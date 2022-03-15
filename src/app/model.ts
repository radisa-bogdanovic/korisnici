export class User {
    public id!:number;
    public dayOfBorn:string;
    public  years!: number;
    public name!:string;
    public picture!:string;
    

constructor(id:number,dayOfBorn:string ,years:number, name:string, picture:string){
this.id=id;    
this.dayOfBorn=dayOfBorn;
this.years=years;
this.name=name;
this.picture= picture;

}}