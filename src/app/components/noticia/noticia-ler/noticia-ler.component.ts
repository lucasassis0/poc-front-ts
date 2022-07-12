import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/modal/delete-modal/delete-modal.component';
import { Noticia } from '../noticia.model';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-ler',
  templateUrl: './noticia-ler.component.html',
  styleUrls: ['./noticia-ler.component.css']
})
export class NoticiaLerComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(
    private noticiaService: NoticiaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.noticiaService.ler().subscribe(noticias => {
      this.noticias = noticias;
    })
    console.log('noticias: ', this.noticias);
  }

  openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DeleteModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => data ? this.handleDelete(id) : '');
  }

  handleDelete(id: string) {
    this.noticiaService.deletar(id).subscribe(() => {
      this.noticiaService.showMessage("Noticia deletada com sucesso!");
      window.location.reload();
    });
  }

}
