import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { storie } from '../interfaces/storie';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../services/stories.service';
import { StoryComponent } from './story/story.component';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css'],
})
export class StoriesListComponent implements OnInit {
  public storiesCategorie: string = '';
  public stories: storie[] = [];

  @ViewChild('storyComponent') storyComponent!: ComponentRef<StoryComponent>;

  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.storiesCategorie = params.get('categorie')!;

      this.storiesService.updateCategorie(this.storiesCategorie);
      
      this.storiesService.getStories().subscribe(respStories =>{
        this.stories = respStories;
      });
    });

  }
}
