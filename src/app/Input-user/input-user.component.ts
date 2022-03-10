import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { User } from '../model';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
@ViewChild('dayOfBorn', {static:false}) dayOfBorn!:ElementRef;
@ViewChild('age', {static:false}) age!:ElementRef;
@ViewChild('name', {static:false}) name!:ElementRef;
@ViewChild('picLink', {static:false}) picLink!:ElementRef;
@Output() userAdded=new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
onAddItem(){
  const id= 0;
  const dayOfBorn= this.dayOfBorn.nativeElement.value;
  const age= this.age.nativeElement.value;
  const name= this.name.nativeElement.value;
  const picLink=this.picLink.nativeElement.value
  const addedUser= new User(id, dayOfBorn,age,name,picLink);
  this.userAdded.emit(addedUser)
}
}
