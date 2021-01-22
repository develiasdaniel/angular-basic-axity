import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Computer } from '../model/computers.model';
import { ComputersService } from '../services/computers.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  formComputer: FormGroup;
  constructor(private formBuilder: FormBuilder, private computers: ComputersService) 
  {
    this.formComputer = this.formBuilder.group({
      brand: ['',[Validators.required]],
      memory: ['',[Validators.required,Validators.min(1)]],
      size:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveClick(){
    const data = new Computer();
    data.brand = this.formComputer.get('brand').value;
    data.memory = this.formComputer.get('memory').value;
    data.size = this.formComputer.get('size').value;

    this.computers.postComputers(data).subscribe(()=>{
      alert("elemento guardado")
    },error =>{
      alert("Ocurrio un error al guardar")
    })
  }
}
