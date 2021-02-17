import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse} from "../model/user.model";
import { Endpoints } from "src/environments/endpoints";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(page: number, perPage:number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${Endpoints.users}?page=${page}&per_page=${perPage}`);
  }

}
