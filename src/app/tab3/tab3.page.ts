import { Component } from '@angular/core';

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor (config)
    {
        super(config);
    }

    preload ()
    {
        this.load.path = 'assets/animations/';

        this.load.image('happy1', 'happy-1.png');
        this.load.image('happy2', 'happy-2.png');
    }

    create ()
    {
        this.anims.create({
            key: 'smile',
            frames: [
                { key: 'happy1' },
                { key: 'happy2' },
                { key: 'happy1' },
                { key: 'happy2', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.add.sprite(49, 30, 'happy1')
            .play('smile');
    }
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
      this.config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          physics: {
              default: 'arcade'
          },
          parent: 'game',
          scene: GameScene
      };
  }

  ngOnInit(): void {
      this.phaserGame = new Phaser.Game(this.config);
  }
}
