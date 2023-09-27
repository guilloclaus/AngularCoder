import { Component, OnInit} from '@angular/core';
import { Alumno } from '../src/clases';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  title = 'Ejercio de listas';

  public alumnos: Alumno[] = [
    new Alumno('Javier', 'Mendoza', 30),
    new Alumno('Daniel', 'Lopez', 30),
    new Alumno('Romina', 'Gomez', 30),
    new Alumno('Monica', 'Peralta', 30),
  ]

  ngOnInit() {
    console.log('Se inicia complemento')
  }

}