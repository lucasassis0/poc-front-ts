import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteModalComponent>,) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(true);
}

close() {
    this.dialogRef.close(false);
}

}
