import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  OnDestroy
} from '@angular/core';
import WallpaperAlgorithm from './wallpapers/ripple';

@Component({
  selector: 'app-wallpaper',
  template: '<canvas #canvas></canvas>',
  styles: [
    `canvas {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }`
  ]
})
export class WallpaperComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', {static: true}) canvas;
  private ctx: any;
  private; alg: WallpaperAlgorithm;
  private timeout: any;

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;

    this.alg = new WallpaperAlgorithm(this.ctx);

    this.animate();
  }

  ngOnDestroy() {
    window.cancelAnimationFrame(this.timeout);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  animate() {
    this.alg.render(this.ctx);
    this.timeout = window.requestAnimationFrame(() => this.animate());
  }
}
