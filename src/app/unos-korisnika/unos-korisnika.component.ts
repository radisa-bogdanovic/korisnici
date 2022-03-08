import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Korisnici } from '../korisnik.komponenta';

@Component({
  selector: 'app-unos-korisnika',
  templateUrl: './unos-korisnika.component.html',
  styleUrls: ['./unos-korisnika.component.css']
})
export class UnosKorisnikaComponent implements OnInit {
@ViewChild('datumRodjenja', {static:false}) datumRodjenja!:ElementRef;
@ViewChild('godine', {static:false}) godine!:ElementRef;
@ViewChild('ime', {static:false}) ime!:ElementRef;
@ViewChild('linkSlike', {static:false}) linkSlike!:ElementRef;
@Output() korisnikDodat=new EventEmitter<Korisnici>();
  constructor() { }

  ngOnInit(): void {
  }
onAddItem(){
  const datumRodjenja= this.datumRodjenja.nativeElement.value;
  const godine= this.godine.nativeElement.value;
  const ime= this.ime.nativeElement.value;
  const linkSlike=this.linkSlike.nativeElement.value
  const dodaniKorisnik= new Korisnici(datumRodjenja,godine,ime,linkSlike);
  this.korisnikDodat.emit(dodaniKorisnik)
}
}
