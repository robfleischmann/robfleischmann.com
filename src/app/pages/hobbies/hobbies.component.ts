import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatExpansionModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
}
