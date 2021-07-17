import { Component } from '@angular/core';

import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor (config)
  {
      super(config);
  }

  preload ()
  {
      this.load.spritesheet('brawler', 'assets/animations/brawler48x48.png', { frameWidth: 48, frameHeight: 48 });
  }

  create ()
  {
     
      const current = this.add.text(48, 460, 'Playing: walk', { color: '#00ff00' });

      // Animation set
      this.anims.create({
          key: 'walk',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
          frameRate: 8,
          repeat: -1
      });

      this.anims.create({
          key: 'idle',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 5, 6, 7, 8 ] }),
          frameRate: 8,
          repeat: -1
      });

      this.anims.create({
          key: 'kick',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 10, 11, 12, 13, 10 ] }),
          frameRate: 8,
          repeat: -1,
          repeatDelay: 2000
      });

      this.anims.create({
          key: 'punch',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 15, 16, 17, 18, 17, 15 ] }),
          frameRate: 8,
          repeat: -1,
          repeatDelay: 2000
      });

      this.anims.create({
          key: 'jump',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 20, 21, 22, 23 ] }),
          frameRate: 8,
          repeat: -1
      });

      this.anims.create({
          key: 'jumpkick',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 20, 21, 22, 23, 25, 23, 22, 21 ] }),
          frameRate: 8,
          repeat: -1
      });

      this.anims.create({
          key: 'win',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 30, 31 ] }),
          frameRate: 8,
          repeat: -1,
          repeatDelay: 2000
      });

      this.anims.create({
          key: 'die',
          frames: this.anims.generateFrameNumbers('brawler', { frames: [ 35, 36, 37 ] }),
          frameRate: 8,
      });

      const keys = [ 'walk', 'idle', 'kick', 'punch', 'jump', 'jumpkick', 'win', 'die' ];

      const cody = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'walk');
      cody.setScale(8);
      cody.play('walk');

      let c = 0;
      this.input.on('pointerdown', function () {
          c++;
          if (c === keys.length)
          {
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
