export class User {
    public dayOfBorn:string;
    public  years!: number;
    public name!:string;
    public picture!:string;

constructor(dayOfBorn:string ,years:number, name:string, picture:string){
this.dayOfBorn=dayOfBorn;
this.years=years;
this.name=name;
this.picture= picture;

}}