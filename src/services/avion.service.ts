import { Injectable } from '@angular/core'
import { Avion } from 'src/models/avion'

@Injectable({
  providedIn: 'root',
})
export class AvionService {
  //Instanciations et importation des objets de l"interface Avion
  boing: Avion = { model: '737', type: 'Transport', annee: '2018', pays: 'USA' }
  airbus: Avion = {
    model: 'A320',
    type: 'Transport',
    annee: '2019',
    pays: 'France',
  }
  comac: Avion = {
    model: 'C919',
    type: 'Transport',
    annee: '2023',
    pays: 'Chine',
  }
  //Création d'un tableau de tous les objets de l'interface Avion
  avions: Avion[] = [this.boing, this.airbus, this.comac]
  constructor() {}

  getAvions() {
    return this.avions
  }
}
