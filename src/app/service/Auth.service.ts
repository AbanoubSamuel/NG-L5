import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin, UserRegister } from '../model/user';
import { APIResponse } from '../ViewModel/Apiresult';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    logged: BehaviorSubject<boolean>
    role: BehaviorSubject<boolean>
    constructor(private http: HttpClient) {
        this.logged = new BehaviorSubject<boolean>(this.isLogged())
        // this.setLoggedStatus(this.isLogged())
        this.role = new BehaviorSubject<boolean>(this.isAdmin())
    }
    setLoggedStatus(status: boolean) {
        this.logged.next(status)
    }
    getLoggedStatus() {
        return this.logged.asObservable()
    }

    login(user: UserLogin) {
        return this.http.post<APIResponse<string>>(`${environment.APIURl}/User/Login`, user)
    }
    register(user: UserRegister) {
        return this.http.post<APIResponse<boolean>>(`${environment.APIURl}/User/POST`, user)
    }
    logout() {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': "application/json",
                'token': this.getToken()!
            })
        }
        return this.http.post(`${environment.APIURl}/User/logout`, {}, options)
    }
    isLogged(): boolean {
        if (localStorage.getItem("token") == null) return false
        else return true
    }

    setToken(token: string) {
        localStorage.setItem("token", token)
    }
    getToken(): string | null {
        return localStorage.getItem("token")
    }
    removeToken() {
        localStorage.removeItem("token")
    }

    setRole(role: boolean) {
        let stringRole = role.toString()
        localStorage.setItem("isAdmin", stringRole)
    }


}
