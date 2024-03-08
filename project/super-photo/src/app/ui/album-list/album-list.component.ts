import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/data/shared/album.service';
import { AlbumDto } from 'src/app/model/album.dto';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  private albumService: AlbumService;
  public albumDtoList: AlbumDto[] = [];

  constructor(albumService: AlbumService) {
    this.albumService = albumService;
    this.getAlbums();
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  public getAlbums(): void {
    this.albumService
    .getAll()
    .subscribe((data) => {
      this.albumDtoList = data as AlbumDto[];
    })
  }
}
