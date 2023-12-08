import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storie } from 'src/app/interfaces/storie';

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

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.story.id = Number.parseInt(params.get('id')!);

      this.story = this.getStory();
    })
  }


  private getStory(): storie {
    // this.storiesService.getStory(this.story.id);

    return {
      id: 2,
      title: 'El Susurro del Fantasma',
      cover: '',
      author: 'Rodrigo Sombras',
      content:
        'En un antiguo manor abandonado, los lugareños aseguran escuchar susurros misteriosos en medio de la noche. Cuando un equipo de investigadores paranormales llega para desentrañar el enigma, descubren que los susurros están relacionados con un trágico amor del pasado. A medida que profundizan, los fantasmas buscan justicia, y la línea entre el mundo de los vivos y los muertos comienza a desdibujarse.',
    };
  }

}
