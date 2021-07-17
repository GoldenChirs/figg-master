import { Component } from '@angular/core';

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image('bg', 'assets/img/monie_bg.png');
    //this.load.spritesheet('brawler', 'assets/animations/brawler48x48.png', { frameWidth: 48, frameHeight: 48 });
    this.load.path = 'assets/animations/';
    this.load.image('happy1', 'happy-1.png');
    this.load.image('happy2', 'happy-2.png');
    this.load.image('sad1', 'sad-1.png');
    this.load.image('sad2', 'sad-2.png');
  }

  create() {
    this.add.image(0, 0, 'bg');
    //const current = this.add.text(48, 460, 'Playing: walk', { color: '#00ff00' });

    // Animation set

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

    this.anims.create({
      key: 'cry',
      frames: [
        { key: 'sad1' },
        { key: 'sad2' },
        { key: 'sad1' },
        { key: 'sad2', duration: 50 }
      ],
      frameRate: 8,
      repeat: -1
    });

    const keys = ['smile', 'cry'];

    const cody = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'smile');
    cody.setScale(1);
    cody.play('smile');

    let c = 0;
    this.input.on('pointerdown', function () {
      c++;
      if (c === keys.length) {
        c = 0;
      }
      cody.play(keys[c]);
    });
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
      width: window.innerWidth,
      height: window.innerHeight,
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
