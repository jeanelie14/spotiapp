import { Component } from '@angular/core'

//models
import { Car } from 'src/models/car'
import { Avion } from 'src/models/avion'

//Services
import { AvionService } from 'src/services/avion.service'
import { CarService } from 'src/services/car.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[]
  avions: Avion[]
  myArray: any[] = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' },
  ]
  constructor(
    private avionService: AvionService,
    private carService: CarService,
  ) {
    this.cars = this.carService.getCars()
    this.avions = this.avionService.getAvions()
  }

  saySomething() {
    alert('good day.')
  }
}
