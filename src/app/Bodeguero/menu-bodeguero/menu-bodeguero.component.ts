import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bodeguero',
  templateUrl: './menu-bodeguero.component.html',
  styleUrls: ['./menu-bodeguero.component.css']
})
export class MenuBodegueroComponent {
  logout(): void {
    this.router.navigate(['/menuprincipal']); 
  }
  constructor(private router: Router) { }
}
