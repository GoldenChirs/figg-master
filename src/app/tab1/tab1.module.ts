import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ExpensesComponent } from '../expenses/expenses.component';
import { BudgetComponent } from '../budget/budget.component';
import { SummaryHeaderComponent } from '../summary-header/summary-header.component';
import { BudgetHelper } from '../helper/budget.helper';

@NgModule({
  providers: [
    BudgetHelper
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, ExpensesComponent, BudgetComponent, SummaryHeaderComponent,]
})
export class Tab1PageModule {}
