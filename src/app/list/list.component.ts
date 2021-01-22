import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Computer } from '../model/computers.model';
import { ComputersService } from '../services/computers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['_id','brand','memory','size','actions'];
  dataSource = new MatTableDataSource<Computer>();

  constructor(private computers: ComputersService, private router: Router) {
    this.computers.getComputers().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

  ngOnInit(): void {
  }

  edit(id: string){
    this.router.navigate(['computers',id]);
  }

  delete(id: string){
    this.computers.deleteComputers(id).subscribe( () =>{
      this.refresh();
    }, err => {
      alert("ocurrio un error al borrar el elemento");
    })
  }

  refresh(){
    this.computers.getComputers().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

}
