import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'info-news', loadChildren: './info-news/info-news.module#InfoNewsPageModule' },
  { path: 'vote', loadChildren: './vote/vote.module#VotePageModule' },
  { path: 'candidate', loadChildren: './candidate/candidate.module#CandidatePageModule' },
  { path: 'candidate-info', loadChildren: './candidate-info/candidate-info.module#CandidateInfoPageModule' },
  { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'comment-section', loadChildren: './comment-section/comment-section.module#CommentSectionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
