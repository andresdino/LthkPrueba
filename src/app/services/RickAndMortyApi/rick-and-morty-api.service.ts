import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseRickAndMorty } from 'src/app/models/Card';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  private URL = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) {}

  get = (page: number = 1): Observable<ResponseRickAndMorty> => {
    return this.httpClient.get<ResponseRickAndMorty>(
      `${this.URL}/character?page=${page}`
    );
  };
}
