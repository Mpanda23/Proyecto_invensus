import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dueno',
  templateUrl: './menu-dueno.component.html',
  styleUrls: ['./menu-dueno.component.css']
})
export class MenuDuenoComponent {
  logout(): void {
    this.router.navigate(['/menuprincipal']);
  }
  constructor(private router: Router) { }
}
