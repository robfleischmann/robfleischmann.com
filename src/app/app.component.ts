import { Component, HostListener, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MysidenavComponent } from './components/mysidenav/mysidenav.component';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule, 
      RouterOutlet,
      RouterModule,
      MatToolbarModule, 
      MatButtonModule, 
      MatIconModule,
      MatMenuModule,
      MatListModule,
      MatSidenavModule,
      MysidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  collapsed = signal(false);
  isMobileView = signal(false);
  @HostListener('window:load', ['$event'])
  onWindowLoad() {
    if (window.innerWidth < 500) {
      this.isMobileView.set(true);
    }
    else {
      this.isMobileView.set(false);
    }
  };
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth < 500) {
      this.isMobileView.set(true);
    }
    else {
      this.isMobileView.set(false);
    }
  };

  sidenavWidth = computed(() => this.isMobileView()? '0' : this.collapsed()? '65px' : '250px');

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'About',
      route: 'about'
    },
    {
      icon: 'developer_mode',
      label: 'Experience',
      route: 'experience'
    },
    {
      icon: 'videocam',
      label: 'Hobbies',
      route: 'hobbies'
    }
  ]);
}
