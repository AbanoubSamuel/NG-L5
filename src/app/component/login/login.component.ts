import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from 'src/app/model/user';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    addform!: FormGroup;
    isValid = false;
    returnURL: string = "";
    constructor(private router: Router, private activate: ActivatedRoute, private Auth: AuthService) {
        this.addform = new FormGroup({
            UserName: new FormControl("", [Validators.required]),
            Password: new FormControl("", [Validators.required]),
        })
    }

    ngOnInit() {
    }
    add() {
        let user: UserLogin = this.addform.value as UserLogin
        this.Auth.login(user).subscribe((response) => {
            if (response.Success) {
                this.Auth.setToken(response.Data)
                this.Auth.setLoggedStatus(true)
                this.router.navigateByUrl("/profile")
            }
            else (
                this.isValid = true
            )
        })
    }

}
