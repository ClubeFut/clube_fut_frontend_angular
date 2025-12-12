import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-association',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Footer
  ],
  templateUrl: './association.html',
  styleUrl: './association.scss',
})
export class Association {

}
