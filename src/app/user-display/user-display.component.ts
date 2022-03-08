import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
 @Input () oneUser!:{dayOfBorn:string ,years:number, name:string, picture:string}
  constructor() { }

  ngOnInit(): void {
  }

}
