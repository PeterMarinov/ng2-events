import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left:10px;}
    `]
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) { }
    loginInvalid: boolean = false;

    login(formValues: any) {
        this.authService
            .loginUser(formValues.userName, formValues.password)
            .subscribe(response => {
                (!response)? this.loginInvalid = true : this.router.navigate(["events"]);
            });
    }

    cancel(): void {
        this.router.navigate(["events"]);
    }
}