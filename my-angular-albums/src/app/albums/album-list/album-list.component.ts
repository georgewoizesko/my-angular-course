import { Component, OnInit } from '@angular/core';
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  constructor() { }
  titleCounter = 1;
  albumsArray: Album[];
  numbers: number[];
  ngOnInit(): void {
    this.numbers = [1, 2, 3];
    this.titleCounter++;
    this.numbers.push(4);
    console.log(this.numbers);
    this.numbers = [...this.numbers];
    console.log(this.albumsArray);
    this.albumsArray = this.albumsArray = ALBUMS;
    this.albumsArray[0].price += 10;
    }
    parentFunctionHandler(album) {
      alert('Album ' + album.albumName + ' was sent from the album card component');
  }
  }
