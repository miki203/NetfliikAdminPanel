import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../model/movie';
import {AddMovie} from '../../model/add-movie';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})

export class NewMovieComponent implements OnInit {

  private movie: AddMovie;
  private wybranaKategoria: String;
  private description: String;
  private movieUrl: String;
  private thumbnailUrl: String;
  private title: String;
  private tab = ['COMEDY', 'SCI_FI', 'HORROR', 'THRILLER'];

  constructor(
    private movieService: MovieService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
  }

  ngOnInit() {
  }

  addMovie() {
    console.log(this.wybranaKategoria);
    this.movie = new AddMovie(this.wybranaKategoria, this.description, this.movieUrl, this.thumbnailUrl, this.title);
    this.movieService.addMovie(this.movie).subscribe(data => {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Film został dodany'],
        dismissible: false,
        timeout: false,
        type: 'success'
      });
    }, error1 => {
      if (error1.status === 400) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Uzupełnij wszystkie pola'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 403) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Kod 403 Skontaktuj się z administratorem'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 404) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Kod 404 Skontaktuj się z administratorem'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      }
    });
  }

}
