import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../model/pet.model';
import { PetsService } from '../services/pets.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  formPets: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private pets: PetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formPets = this.formBuilder.group({
      name: ['', [Validators.required]],
      specie: ['', [Validators.required]],
      hairColor: ['', [Validators.required]],
      weight: [
        '',
        [Validators.required, Validators.min(0), Validators.max(50)],
      ],
    });

    // this.route.params.subscribe((parameters) => {
    //   if (parameters.id) {
    //     console.log('', parameters.id);
    //     this.id = parameters.id;

    //     this.computers.getSingleComputer(parameters.id).subscribe((res) => {
    //       this.formComputer.get('brand').setValue(res.brand);
    //       this.formComputer.get('memory').setValue(res.memory);
    //       this.formComputer.get('size').setValue(res.size);
    //     });
    //   }
    // });
  }

  ngOnInit(): void {}

  savePet() {
    const data = new Pet();
    data.name = this.formPets.get('name').value;
    data.specie = this.formPets.get('specie').value;
    data.hairColor = this.formPets.get('hairColor').value;
    data.weight = this.formPets.get('weight').value;

    if (this.id) {
      // this.computers.updateComputers(this.id, data).subscribe(
      //   () => {
      //     this.router.navigate(['list']);
      //   },
      //   (err) => {
      //     alert('ocurrrio un error al actualizar elemento');
      //   }
      // );
    } else {
      this.pets.savePet(data).subscribe(
        () => {
          alert('Mascota guardada exitosaente');
        },
        (error) => {
          alert('Ocurrió un error al guardar');
        }
      );
    }
  }
}
