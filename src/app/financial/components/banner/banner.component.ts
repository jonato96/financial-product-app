import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  private readonly router = inject(Router);

  redirect() {
    this.router.navigate(['financial/list-product']);
  }

}
