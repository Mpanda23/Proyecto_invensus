import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-menu-personal',
  templateUrl: './menu-personal.component.html',
  styleUrls: ['./menu-personal.component.css']
})
export class MenuPersonalComponent {
  logout(): void {
    this.router.navigate(['/menuprincipal']); 
  }
  constructor(private router: Router) { }

}
