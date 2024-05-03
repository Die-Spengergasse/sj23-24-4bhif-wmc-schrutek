import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumDto } from 'src/app/model/album.dto';
import { EnvironmentUrlService } from '../environment-url.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient, private environmentService: EnvironmentUrlService) { }

  public getAll(): Observable<AlbumDto[]> {
    return this.http.get<AlbumDto[]>(
      `${this.environmentService.urlAddress}/api/Album/ok`
    );
  }

  private generateHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'ACCESS-CONTROL-ALLOW-ORIGIN': 'http://localhost:4200',
        'CONTENT-TYPE': 'application/json',
        'other-info': 'whatever',
      }),
    };
  }
}
