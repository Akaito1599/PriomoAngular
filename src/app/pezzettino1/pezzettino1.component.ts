import { Component } from '@angular/core';
import {Persona} from '../../model/Persona';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pezzettino1',
  imports: [
    NgForOf
  ],
  templateUrl: './pezzettino1.component.html',
  styleUrl: './pezzettino1.component.css'
})
export class Pezzettino1Component
{
  persone: Persona[] = [
    { nome: "Stefano", cognome: "Rubinetti", eta: 29 },
    { nome: "Giulia", cognome: "Verdi", eta: 50 },
    { nome: "Luca", cognome: "Rossi", eta: 25 },
    { nome: "Francesca", cognome: "Azzurri", eta: 15 },
    { nome: "Marco", cognome: "Ferrari", eta: 33 },
    { nome: "Chiara", cognome: "Gallo", eta: 24 },
    { nome: "Alessandro", cognome: "Romano", eta: 30 },
    { nome: "Elena", cognome: "Marini", eta: 28 },
    { nome: "Davide", cognome: "Costa", eta: 35 },
    { nome: "Valentina", cognome: "Greco", eta: 85 }
  ];

  decidiClasse(p:Persona):any
  {
    if(p.eta<18)
      return 'minorenne';
    if(p.eta<30)
      return 'giovane';
    if(p.eta<67)
      return 'menoGiovane';

    return 'pensionato';
  }



  distruggi(p: Persona)
  {
    this.persone = this.persone.filter(e=>e!=p);
  }
}
