import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-mysidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './mysidenav.component.html',
  styleUrl: './mysidenav.component.css'
})
export class MysidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
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

  profilePicSize = computed(() => this.sideNavCollapsed()? '32' : '100');
}
