import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../models/formation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }

  public getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(environment.apiHost + 'formations');
  }

  public getById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`http://localhost:3000/formations/${id}`);
  }

  public save(formation: Formation): Observable<Formation> {
    if (formation.id) {
      const url = `http://localhost:3000/formations/${formation.id}`;
      return this.httpClient.patch<Formation>(url, formation);
    }
    else {
      const url = `http://localhost:3000/formations`;
      return this.httpClient.post<Formation>(url, formation);
    }
  }


  // Exemple de méthode avec un typage Generic
  public getList<T>(url): Observable<T[]> {
    return this.httpClient.get<T[]>(`http://localhost:3000`);
  }


}
