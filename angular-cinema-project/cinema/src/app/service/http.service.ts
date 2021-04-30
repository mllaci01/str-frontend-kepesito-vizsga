import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';


  constructor(private http: HttpClient) { }

  getMovieList():any {
    return this.http.get<Movie[]>(this.BASE_URL);
  }

  deleteMovie(id: number):any {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }
}
