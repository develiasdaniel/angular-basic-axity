import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotasRequest } from '../model/mascotas.model';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  formMascotas: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formMascotas = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      especie: ['',[Validators.required, Validators.minLength(5)]],
      colorPelo:['',[Validators.required]],
      peso:['',[Validators.required, Validators.min(0),Validators.max(50)]],
    });
  }

  ngOnInit(): void {
  }

  mascotasClick(){
    const nombre = this.formMascotas.get('nombre').value;
    const especie = this.formMascotas.get('especie').value;
    const colorPelo = this.formMascotas.get('colorPelo').value;
    const peso = this.formMascotas.get('peso').value;

    const data = new  MascotasRequest;
    data.nombre = nombre;
    data.especie = especie;
    data.colorPelo = colorPelo;
    data.peso = peso;
    console.log(data);
    
    // this.loginService.login(data).subscribe(value => {
    //   if (value.token){
    //     this.route.navigate(['home'])
    //   }   
    // })
  }

}
