import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOption = 'light';
  shouldRun = true;
  title = 'themeproject';
  overlay: HTMLElement;

  constructor(private overlayContainer: OverlayContainer) {
    this.overlay = overlayContainer.getContainerElement();
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.menuOption);
  }
  changeTheme(data) {
    this.menuOption = data;
    if(data === 'light') {
      this.overlay.classList.add('dark');
      this.overlay.classList.remove('light');
    } else {
      this.overlay.classList.add('light');
      this.overlay.classList.remove('dark');
    }
  }
}
