import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    id;

    constructor(
        private router : Router,
    ) { }

    ngOnInit(): void {
    }

    login() {
        localStorage.setItem('id', this.id);
        this.router.navigate(['/chat']);
    }

}
