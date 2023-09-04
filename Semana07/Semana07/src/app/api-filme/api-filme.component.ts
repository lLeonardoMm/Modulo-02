import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FilmeService } from '../Services/filme.service';
import { IFilme } from '../Interfaces/IFIlmes';

@Component({
  selector: 'app-api-filme',
  templateUrl: './api-filme.component.html',
  styleUrls: ['./api-filme.component.css']
})
export class ApiFilmeComponent {

  carregando = false
  filmesArray: IFilme[] = []
  filmeTopTres: IFilme[] | null = null
  filmeMostrado: IFilme | null = null
  arrayValor = 0

  constructor(private buscandoFilme: FilmeService) { 
    this.buscandoFilme.buscarFilmesS().subscribe((response) => {
      this.filmesArray = response
      this.carregando = false
      this.filmeTopTres = this.buscandoFilme.topTres(response)
      this.filmeMostrado = this.filmeTopTres[0]
  })
}

  buscarFilme() {
    this.carregando = true
    this.buscandoFilme.buscarFilmesS().subscribe((response) => {
      console.log(response)
      this.filmesArray = response
      this.carregando = false
    })
  }
  bemAvailiado(){
    const resultado = this.buscandoFilme.FilmeMaiorNota(this.filmesArray)
    console.log(resultado)
  }
  proximo(){
    this.arrayValor++
    if(this.filmeTopTres != null){
      this.filmeMostrado = this.filmeTopTres[this.arrayValor]
    } 
  }
  anterior(){
    this.arrayValor--
    if(this.filmeTopTres != null){
      this.filmeMostrado = this.filmeTopTres[this.arrayValor]
    } 
  }
}
