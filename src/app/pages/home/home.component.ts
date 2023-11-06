import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMoiveResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMoiveResult = result.results;
    });
  }

  // action movie
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.actionMovieResult = result.results;
    });
  }

  // advanture movie
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, ' advanturemovies#');
      this.adventureMovieResult = result.results;
    });
  }

  // animation movies
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationmovies#');
      this.animationMovieResult = result.results;
    });
  }

  // comedy movie
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedymovies#');
      this.comedyMovieResult = result.results;
    });
  }

  // documentary movies
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentarymovies#');
      this.documentaryMovieResult = result.results;
    });
  }

  // scienceFiction movies
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'scienceFictionmovies#');
      this.scienceFictionMovieResult = result.results;
    });
  }

  // thriller movies
  thrillerMovie() {
    this.service.fetchThrillerFictionMovies().subscribe((result) => {
      console.log(result, 'thrillermovies#');
      this.thrillerMovieResult = result.results;
    });
  }
}
