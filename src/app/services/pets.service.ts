import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  getSinglePet(id: string) {
    return this.http.get<Pet>(
      'https://super-rest.herokuapp.com/test/eliassanchez/' + id
    );
  }

  getPets(): Observable<[Pet]> {
    return this.http.get<[Pet]>(
      'https://super-rest.herokuapp.com/test/eliassanchez/'
    );
  }

  savePet(data: Pet) {
    return this.http.post(
      'https://super-rest.herokuapp.com/test/eliassanchez/',
      data
    );
  }

  updatePet(id: string, data: Pet) {
    return this.http.put(
      'https://super-rest.herokuapp.com/test/eliassanchez/' + id,
      data
    );
  }

  deletePet(id: String) {
    return this.http.delete(
      'https://super-rest.herokuapp.com/test/eliassanchez/' + id
    );
  }
}
