import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/movie.service';
import { Director } from 'src/app/model/director.model';
import { Movie } from 'src/app/model/movie.model';
import { UtilsService } from 'src/app/shared/core/utils.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  movie!: Movie;
  displayedColumns = ['name'];

  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private utilsService: UtilsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != null) {
      this.movieService.readById(id).subscribe(movie => {
        this.movie = movie;
      });
    } else {
      this.utilsService.showMessage("ID é um parâmetro obrigatório para efetuar essa operação", true);
    }
  }

  delete(): void {
    this.movieService.delete(this.movie).subscribe(() => {
      this.utilsService.showMessage("Filme excluído com sucesso.");
      this.router.navigate(['/movie']);
    }, e => {
      console.log(e);
      this.utilsService.showMessage(e.message, true);
    });
  }

  cancel(): void {
    this.router.navigate(['/movie']);
  }
}