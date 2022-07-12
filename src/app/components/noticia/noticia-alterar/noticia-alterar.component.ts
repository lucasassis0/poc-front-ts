import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../noticia.model';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-alterar',
  templateUrl: './noticia-alterar.component.html',
  styleUrls: ['./noticia-alterar.component.css']
})
export class NoticiaAlterarComponent implements OnInit {

  noticia:Noticia = {
    id: '',
    title: '',
    description: ''
  }

  constructor(private router:Router, private noticiaService: NoticiaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.noticiaService.lerPorId(id).subscribe(noticia =>{
      this.noticia.id = noticia.id;
      this.noticia.title = noticia.title;
      this.noticia.description = noticia.description;
    })
  }

  alterar(): void{
    console.log(this.noticia)
    this.noticiaService.alterar(this.noticia).subscribe(()=>{
      this.noticiaService.showMessage("Noticia alterada com sucesso!");
      this.router.navigate(["/noticias"]);

    });
  }

  cancelar(): void{
    this.router.navigate(["/noticias"]);
  }
}
