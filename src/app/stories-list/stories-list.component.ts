import { Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { storie } from '../interfaces/storie';
import { ActivatedRoute, Route } from '@angular/router';
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
  public selectedStory: storie = {
    id: 0,
    author: '',
    cover: '',
    title: '',
  };
  @ViewChild('storyComponent') storyComponent!: ComponentRef<StoryComponent>;

  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.storiesCategorie = params.get('categorie')!;

      console.log('Categoria: ',this.storiesCategorie);

      this.storiesService.updateCategorie(this.storiesCategorie);
    });

    this.stories = this.getStories();
  }

  private getStories(): storie[] {
    // this.storiesService.getStories(this.storiesCategorie);

    let stories: storie[] = [
      {
        id: 1,
        title: 'El Secreto del Reloj Olvidado',
        cover: '',
        author: 'Valentina Enigma',
      },
      {
        id: 2,
        title: 'El Susurro del Fantasma',
        cover: '',
        author: 'Rodrigo Sombras',
      },
      {
        id: 3,
        title: 'El Enigma de las Cartas Anónimas',
        cover: '',
        author: 'Beatriz Intriga',
      },
      {
        id: 4,
        title: 'El Cuadro Maldito',
        cover: '',
        author: 'Martín Enigma',
      },
      {
        id: 5,
        title: 'El Último Baile de Medianoche',
        cover: '',
        author: 'Isabella Misterio',
      },
    ];

    return stories;
  }
}
