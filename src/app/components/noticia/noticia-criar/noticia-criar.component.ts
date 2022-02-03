import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../noticia.model';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-criar',
  templateUrl: './noticia-criar.component.html',
  styleUrls: ['./noticia-criar.component.css']
})
export class NoticiaCriarComponent implements OnInit {

  noticia:Noticia = {
    title: '',
    description: ''
  }

  constructor(private noticiaService: NoticiaService,private router:Router) { }

  ngOnInit(): void {
  }

  criar(): void{
    if((this.noticia.title !== '' && this.noticia.title !== null)&&(this.noticia.description !== '' && this.noticia.description!==null)){
      this.noticiaService.criar(this.noticia).subscribe(()=>{
        this.noticiaService.showMessage('Noticia adicionada');
        this.router.navigate(['/noticias']);
      });
      return;
    }
    this.noticiaService.showMessageErro('Por favor, preencha todos os campos!');
  }

  cancelar(){
    this.router.navigate(["/noticias"])
  }
}
