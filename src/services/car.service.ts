import { Injectable } from '@angular/core'
import { Car } from 'src/models/car'

@Injectable({
  providedIn: 'root',
})
export class CarService {
  //Instanciations et importation des objets de l"interface car
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 }
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 }
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 }
  //Création d'un tableau de tous les objets de l'interface Car
  cars: Car[] = [this.subaru, this.honda, this.bmw]

  constructor() {}

  //Method pour notre tableau d'objet de type car
  getCars() {
    return this.cars
  }
}
