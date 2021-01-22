import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from '../model/computers.model';
@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor(private http: HttpClient) { }

  getComputers(): Observable<[Computer]>{
    return this.http.get<[Computer]>('https://super-rest.herokuapp.com/test/elias');
  }

  postComputers(data: Computer){
    return this.http.post('https://super-rest.herokuapp.com/test/elias',data);
  }

  updateComputers(id: string, data: Computer){
    return this.http.put('https://super-rest.herokuapp.com/test/elias'+id,data);
  }

  deleteComputers(id: String){
    return this.http.delete('https://super-rest.herokuapp.com/test/elias'+id);
  }
}
