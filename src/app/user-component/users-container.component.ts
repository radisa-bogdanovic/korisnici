import { Component, OnInit } from '@angular/core';
import { User } from '../model';
@Component({
  selector: 'app-container-component',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainer implements OnInit {
usersArray:User[]=[
     new User(1,'1965-09-18T12:56:44.855Z', 57, 'Lily Askevold','https://randomuser.me/api/portraits/women/51.jpg'),
     new User(2,'1959-06-14T00:46:14.836Z', 63, 'Sofija Fossen',"https://randomuser.me/api/portraits/women/51.jpg",),
     new User(3,'1964-07-20T09:22:02.065Z', 58, 'NooaRemes',"https://randomuser.me/api/portraits/men/93.jpg"),
     new User(4,'1961-09-24T08:04:05.485Z', 61, 'Giulia Denis', "https://randomuser.me/api/portraits/women/49.jpg" ),
     new User(5,'1977-11-09T17:10:24.639Z', 45, 'Myrtle Welch', "https://randomuser.me/api/portraits/women/73.jpg" ),
     new User(6,'1977-09-05T02:33:37.934Z', 45, 'Thea Jørgensen',"https://randomuser.me/api/portraits/women/84.jpg"  ),
     new User(7,'1975-01-05T19:36:47.619Z', 47, 'David Blanchard', "https://randomuser.me/api/portraits/men/56.jpg"),
     new User(8,'1958-02-03T16:35:41.435Z', 64, 'Eli Wilson', "https://randomuser.me/api/portraits/men/47.jpg" ),
     new User(9,'1950-10-13T06:56:09.129Z', 72, 'Angel Freeman', "https://randomuser.me/api/portraits/men/43.jpg"),
     new User(10,'1949-08-11T19:27:45.328Z', 73, 'Andrea Warren', "https://randomuser.me/api/portraits/women/96.jpg")
   ]
  constructor() { }

  ngOnInit(): void {
    
  }
  onUserAdded(newUSer:User){
    this.usersArray= [newUSer, ...this.usersArray]
  }
}
