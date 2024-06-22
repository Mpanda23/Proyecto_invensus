import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-menuu',
  templateUrl: './menuu.component.html',
  styleUrls: ['./menuu.component.css']
})

export class MenuuComponent {
  logout(): void {
    this.router.navigate(['/menuprincipal']); 
  }
  constructor(private router: Router) { }

}
