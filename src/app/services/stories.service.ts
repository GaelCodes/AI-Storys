import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storie } from '../interfaces/storie';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  storiesURL: string = 'assets/stories-json/';

  constructor(private http: HttpClient) { }


  public getStories(categorie: string){
    return this.http.get<storie[]>(`${this.storiesURL + "regular/stories-regular.json"}`);
  }


  public getStory(categorie: string, storyId: number){
    return this.http.get<storie[]>(`${this.storiesURL + "regular/stories-regular.json"}`);
  }
}
