import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../noticia.model';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-deletar',
  templateUrl: './noticia-deletar.component.html',
  styleUrls: ['./noticia-deletar.component.css']
})
export class NoticiaDeletarComponent implements OnInit {

  noticia:Noticia = {
    title: '',
    description: ''
  }
  constructor(private router:Router, private noticiaService:NoticiaService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id') || '';
    this.noticiaService.lerPorId(id).subscribe(noticia =>{
      this.noticia.title = noticia.title;
      this.noticia.description = noticia.description;
    })
  }

  deletar():void{
    const id = this.route.snapshot.paramMap.get('_id') || '';
    this.noticiaService.deletar(id).subscribe(() =>{
      this.noticiaService.showMessage('Noticia deletada com sucesso!');
      this.router.navigate(["/noticias"])
    })
  }

  cancelar(){
    this.router.navigate(["/noticias"])
  }
}
