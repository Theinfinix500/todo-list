import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from '../models/Note';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  getNotesByList(listId: number): Observable<Array<Note>> {
    return this.http
      .get<{ notes: Array<Note> }>(`${environment.apiUrl}/note/list/${listId}`)
      .pipe(map((res) => res.notes));
  }
}
