import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FormsModule,
    Footer
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

}
