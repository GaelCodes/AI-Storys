import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storie } from '../interfaces/storie';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  storiesURL: string = 'assets/stories-json/';
  storiesCategorie: string = '';

  constructor(private http: HttpClient) { }


  public getStories(){
    return this.http.get<storie[]>(`${this.storiesURL + this.storiesCategorie}/stories-${this.storiesCategorie}.json`);
  }


  public getStory(storyId: number){
    return this.http.get<storie>(`${this.storiesURL + this.storiesCategorie}/story-${storyId}.json`);
  }

  public updateCategorie(categorie: string){
    this.storiesCategorie = categorie;
  }
}
