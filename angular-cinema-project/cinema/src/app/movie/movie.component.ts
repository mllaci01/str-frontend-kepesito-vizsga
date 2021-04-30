import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild('mForm', { static: true }) movieForm: FormGroup;
  movie: Movie = new Movie();

  list$: Observable<Movie[]> = this.httpService.getMovieList();

  constructor(
    private httpService: HttpService,
  ) {

  }

  ngOnInit(): void {
  }

  saveMovie(id: number): any {
    return {};

  }

  }
