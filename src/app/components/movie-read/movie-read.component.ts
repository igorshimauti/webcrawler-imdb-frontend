import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrawlerService } from 'src/app/core/crawler.service';
import { MovieService } from 'src/app/core/movie.service';
import { Movie } from 'src/app/model/movie.model';
import { UtilsService } from 'src/app/shared/core/utils.service';

@Component({
  selector: 'app-movie-read',
  templateUrl: './movie-read.component.html',
  styleUrls: ['./movie-read.component.css']
})
export class MovieReadComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns = ['name', 'rate', 'action'];
  loading: boolean = false;
  reload: boolean = false;

  constructor(private movieService: MovieService,
    private crawlerService: CrawlerService,
    private utilsService: UtilsService,
    private router: Router) { }

  ngOnInit(): void {
    this.movieService.read().subscribe(movies => {
      this.movies = movies;
    });
  }

  runCrawler(): void {
    this.reload = true;
    this.loading = true;

    this.movieService.deleteAll().subscribe(() => {
      this.crawlerService.run().subscribe(() => {
        this.loading = false;
        this.utilsService.showMessage("Crawler executado com sucesso!");
  
        if (this.reload) {
          location.reload();
          this.reload = false;
        }
      }, e => {
        this.loading = false;
        this.utilsService.showMessage(e.message, true);      
      });
    });
  }
}