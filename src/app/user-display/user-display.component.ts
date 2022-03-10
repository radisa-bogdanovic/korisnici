import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from '../model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
 @Input () oneUser!:{id:number,dayOfBorn:string ,years:number, name:string, picture:string}
  constructor(private route:ActivatedRoute) { }
  @Input() usersArray!:User[]

  ngOnInit(): void {
    console.log(this.usersArray)
    const id=+this.route.snapshot.params['id']
    console.log(id)}}
//   findingUser(id)
//     this.oneUser=oneUserp
// }
// findingUser(id:number){
//   const oneUserp= this.usersArray.find((user)=>{
//     return user.id===+id
//   }
//   )
//   return oneUserp
// } 



