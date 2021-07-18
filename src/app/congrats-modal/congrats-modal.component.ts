import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-congrats-modal',
  templateUrl: './congrats-modal.component.html',
  styleUrls: ['./congrats-modal.component.scss'],
})
export class CongratsModalComponent implements OnInit {

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
