import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CandidateInfoPage } from './candidate-info.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CandidateInfoPage]
})
export class CandidateInfoPageModule {}
