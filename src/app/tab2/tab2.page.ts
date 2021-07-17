import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BudgetHelper } from '../helper/budget.helper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public toastOpen = false;

  constructor(public toastCtrl: ToastController, private budgetHelper: BudgetHelper) { }
  async openToast() {
    const toast = await this.toastCtrl.create({
      header: 'Challenge Complete!',
      message: 'You got 20 Points!',
      position: 'top',
      cssClass: 'toast-custom-class',
      buttons: [
        {
          side: 'end',
          text: 'Got it!',
          handler: () => {
            this.budgetHelper.updateChallengesStatus();
            this.budgetHelper.updatePoints();
            this.toastOpen = false;
          }
        },
      ]
    });
    toast.present();
    this.toastOpen = true;
  }

}
