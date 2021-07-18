import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CongratsModalComponent } from '../congrats-modal/congrats-modal.component';
import { BudgetHelper } from '../helper/budget.helper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastCtrl: ToastController, private budgetHelper: BudgetHelper, public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CongratsModalComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    modal.onDidDismiss().then(() => {
      this.budgetHelper.updateChallengesStatus();
      this.budgetHelper.updatePoints();
    });

    return await modal.present();
  }
}
