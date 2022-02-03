import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias-crud',
  templateUrl: './noticias-crud.component.html',
  styleUrls: ['./noticias-crud.component.css']
})
export class NoticiasCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegaParaCriarNoticia(){
    this.router.navigate(['/noticias/criar'])
  }
}
