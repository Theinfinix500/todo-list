import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteService } from '../services/note.service';
import { Note } from '../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  @Input() listId: number;
  notes: Array<Note> = [];

  constructor(
    private modalController: ModalController,
    private noteService: NoteService
  ) {}

  ngOnInit() {
    this.noteService
      .getNotesByList(this.listId)
      .subscribe((notes) => (this.notes = notes));
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
