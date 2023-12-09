import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { storie } from 'src/app/interfaces/storie';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story: storie = {
    id: 0,
    author: '',
    cover: '',
    title: '',
    content: ''
  }

  @Input() public categorie: string = '';

  constructor(private route: ActivatedRoute, private storieService: StoriesService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('Parametros en story');
      console.dir(params);
      this.story.id = Number.parseInt(params.get('id')!);

      console.log('Story ID: ',this.story.id);
      this.getStory().subscribe(story=>{
        this.story = story;
      });
    });

    console.log(`Componente iniciado: cat: ${this.categorie} - id: ${this.story.id}`);

    this.getStory().subscribe(story=>{
      this.story = story;
    });
  }


  private getStory(): Observable<storie> {
    return this.storieService.getStory(this.story.id);
    
  }

}
