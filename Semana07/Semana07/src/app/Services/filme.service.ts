import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IFilme } from '../Interfaces/IFIlmes';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private getFilmes: HttpClient) { }
  
  buscarFilmesS(){
    return this.getFilmes.get<IFilme[]>(`${environment.mockApi}/filmes/get-all`)
  }
  FilmeMaiorNota(filmeArray: IFilme[]){
    return filmeArray.reduce(function(prev, atual){
      if (prev.notaIMDb > atual.notaIMDb){
        return prev
      }else {
        return atual
      }
    })
  }
    topTres(filmeArray: IFilme[]){
      let copia: IFilme[] = filmeArray
      let toptres: IFilme[] = []
      for (let index = 0; index < 3; index++) {
        toptres.push(this.FilmeMaiorNota(copia))
        copia.splice(copia.indexOf(toptres[index]), 1)
      }
      return toptres
    }
}
