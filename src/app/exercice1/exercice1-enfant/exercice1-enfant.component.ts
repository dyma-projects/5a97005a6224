import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output('changer') changerCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementer(): void {
    this.compteur++;
    this.changerCompteur.emit({
      value: this.compteur
    });
  }

  decrementer(): void {
    this.compteur--;
    this.changerCompteur.emit({
      value: this.compteur
    });
  }

}
