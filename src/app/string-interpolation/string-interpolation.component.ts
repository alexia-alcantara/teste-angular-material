import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstname: "Allexia",
    lastname: "Alcantara",
    age: 25,
    address: "Route 100",
    food: "Comida Japonesa"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
