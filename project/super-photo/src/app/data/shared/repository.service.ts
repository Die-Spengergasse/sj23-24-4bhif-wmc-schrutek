import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from '../environment-url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService<T> {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
 
  public getData(route: string): Observable<T> {
    return this.http.get<T>(this.createCompleteRoute(route),
    );
  }
 
  public create(route: string, body: any): Observable<T> {
    return this.http.post<T>(this.createCompleteRoute(route), 
      body);
  }
 
  public update(route: string, body: any): Observable<T> {
    return this.http.put<T>(this.createCompleteRoute(route), 
      body);
  }
 
  public delete(route: string): Observable<T> {
    return this.http.delete<T>(this.createCompleteRoute(route),
    );
  }
 
  private createCompleteRoute(route: string) {
    return `${this.envUrl.urlAddress}/${route}`;
  }
 
  private generateHeaders() {
    return {
      headers: new HttpHeaders({
        'ACCESS-CONTROL-ALLOW-ORIGIN': 'http://localhost:4200',
        'CONTENT-TYPE': 'application/json',
        'other-info': 'whatever',
      })
    }
  }
}
