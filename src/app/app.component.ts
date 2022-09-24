import { Component } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado Empleados';
  empleados:Empleado[]=[
    new Empleado("Gustavo","Sanchez","Analista De Sistemas",5000),
    new Empleado("Isabel","Sanchez","Jefa De Compras",8000),
    new Empleado("Gino","Gonzales","Jefe De Sistemas",10000),
  ];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0.0;
  agregarEmpleado()
  {
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    this.empleados.push(miEmpleado);
  }


}
