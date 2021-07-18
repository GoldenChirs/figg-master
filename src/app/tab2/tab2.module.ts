import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ChallengesComponent } from '../challenges/challenges.component';
import { PointsComponent } from '../points/points.component';
import { CelebrationComponent } from '../celebration/celebration.component';
import { CongratsModalComponent } from '../congrats-modal/congrats-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [Tab2Page, ChallengesComponent, PointsComponent, CelebrationComponent, CongratsModalComponent]
})
export class Tab2PageModule {}
