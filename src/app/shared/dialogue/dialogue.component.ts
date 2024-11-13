import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit(): void {
    if (this.data.type == 'deleteEmployee') {
        
    }
  }
  closeDialogue(val:boolean){
    this.dialogRef.close(val);
  }
}
