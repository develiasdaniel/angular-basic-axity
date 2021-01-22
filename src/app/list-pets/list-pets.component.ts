import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pet } from '../model/pet.model';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css'],
})
export class ListPetsComponent implements OnInit {
  displayedColumns = [
    '_id',
    'name',
    'specie',
    'hairColor',
    'weight',
    'actions',
  ];
  dataSource = new MatTableDataSource<Pet>();

  constructor(private pets: PetsService, private router: Router) {
    this.pets.getPets().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngOnInit(): void {}

  edit(id: string){
    this.router.navigate(['pets',id]);
  }

  delete(id: string) {
    const deletePet = confirm('Esta seguro de eliminar la mascota');
    if (deletePet) {
      this.pets.deletePet(id).subscribe(
        () => {
          this.refresh();
        },
        (err) => {
          alert('ocurrio un error al borrar el elemento');
        }
      );
    }
  }

  refresh() {
    this.pets.getPets().subscribe((res) => {
      this.dataSource.data = res;
    });
  }
}
