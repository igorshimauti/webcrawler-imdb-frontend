import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/movie.service';
import { Movie } from 'src/app/model/movie.model';
import { UtilsService } from 'src/app/shared/core/utils.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

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

  update(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.utilsService.showMessage('Filme atualizado com sucesso.');
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