import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { List } from "../models/List";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ListService {
  constructor(private http: HttpClient) {}

  getLists(): Observable<Array<List>> {
    return this.http
      .get<{ lists: Array<List> }>(`${environment.apiUrl}/list`)
      .pipe(map((res) => res.lists));
  }
}
