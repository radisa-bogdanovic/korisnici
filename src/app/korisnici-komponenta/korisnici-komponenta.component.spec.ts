import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisniciKomponentaComponent } from './korisnici-komponenta.component';

describe('KorisniciKomponentaComponent', () => {
  let component: KorisniciKomponentaComponent;
  let fixture: ComponentFixture<KorisniciKomponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisniciKomponentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisniciKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
