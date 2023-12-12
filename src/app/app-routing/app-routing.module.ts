import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StoriesListComponent } from '../stories-list/stories-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryComponent } from '../stories-list/story/story.component';
import { MyGuard } from '../guards/my-guard.guard';


const routes: Route[] = [
  {path: 'stories-list/:categorie', component: StoriesListComponent,
    children:  [
      {path: 'story/:id', component: StoryComponent},
    ],
    canActivate: [MyGuard]
  },
  {path: '', redirectTo: 'stories-list/regular', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
