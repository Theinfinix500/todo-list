import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ListService } from '../services/list.service';
import { List } from '../models/List';
import { map } from 'rxjs/operators';
import { NotesPage } from '../notes/notes.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  lists: Array<List> = [];
  constructor(
    private listService: ListService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadLists().subscribe(console.log);
  }

  loadLists() {
    return this.listService
      .getLists()
      .pipe(map((lists) => (this.lists = lists)));
  }

  async goToDetails(listId: number) {
    const modal = await this.modalController.create({
      component: NotesPage,
      componentProps: {
        listId,
      },
    });
    await modal.present();
  }
}
