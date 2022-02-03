import { Component, OnInit } from '@angular/core';
import { Noticia } from '../noticia.model';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-ler',
  templateUrl: './noticia-ler.component.html',
  styleUrls: ['./noticia-ler.component.css']
})
export class NoticiaLerComponent implements OnInit {

  noticias!: Noticia[];
  displayedColumns = ['title', 'description','action']

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.noticiaService.ler().subscribe(noticias => {
      this.noticias = noticias;
      console.log(noticias);
    })
  }

}
