import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BudgetHelper } from '../helper/budget.helper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastCtrl: ToastController, private budgetHelper: BudgetHelper) { }
  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Challenges Completed! You got 20 Points!',
      duration: 2000
    });
    toast.present();
  }

}
