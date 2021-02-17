import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { PageEvent } from "@angular/material/paginator";
import {UserResponse} from '../../model/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
  ];
  length = 100;
  pageSize = 6;
  pageIndex = 0;
  pageSizeOptions: number[] = [2,3,4,6];
  dataSource = new MatTableDataSource<User>();
  userRespose: UserResponse;

  constructor(private user: UserService) {
    let firstPage:number = 1;
    let perPage = 6;
    this.user.getUsers(firstPage, perPage).subscribe((res) => {
      this.userRespose = res;
      this.dataSource.data = this.userRespose.data;
      this.length = this.userRespose.total;
      console.log(this.userRespose);      
    });    
  }

  ngOnInit(): void {
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.user.getUsers(this.pageIndex+1, this.pageSize).subscribe((res) => {
      this.userRespose = res;
      this.dataSource.data = this.userRespose.data;     
    }); 
    
  }

}
