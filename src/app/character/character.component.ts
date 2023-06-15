import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input({required: true}) characterImage: string = '';
  @Input({required: true}) name: string = '';
  @Input({required: true}) hp: number = 0;
  @Input({required: true}) mp: number = 0;
}
