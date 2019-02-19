import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component'
import { VideoDetailsComponent } from './video-details/video-details.component';
import {ChannelComponent} from './channel/channel.component';

const routes: Routes = [
  { path: '', redirectTo: '/video', pathMatch: 'full' },
  { path: 'video', component: VideoListComponent  },
  { path: 'video/:id', component: VideoDetailsComponent },
  { path: 'channel/:id', component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
