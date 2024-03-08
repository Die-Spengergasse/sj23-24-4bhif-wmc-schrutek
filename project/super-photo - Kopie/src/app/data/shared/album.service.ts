import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumDto } from 'src/app/model/album.dto';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
 
  public getAll(): Observable<AlbumDto[]> {
    return this.http.get<AlbumDto[]>("https://localhost:7022/api/Album/ok", 
      this.generateHeaders());
  }

  private generateHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'ACCESS-CONTROL-ALLOW-ORIGIN': 'http://localhost:4200', 
        'CONTENT-TYPE': 'application/json',
        'other-info': 'whatever'
      })
    }
  }
}
