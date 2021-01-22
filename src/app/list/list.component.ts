import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from '../model/computers.model';
import { ComputersService } from '../services/computers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['_id','brand','memory','size'];
  dataSource = new MatTableDataSource<Computer>();

  constructor(private computers: ComputersService) {
    this.computers.getComputers().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

  ngOnInit(): void {
  }


}
