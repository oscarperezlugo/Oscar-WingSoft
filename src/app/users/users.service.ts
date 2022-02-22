import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    constructor(private http: HttpClient) { }

    login(user: any): Observable<any> {
        const headers = { 'content-type': 'application/json' }
        console.log(user);
        
        return this.http.post("http://avilatechno.somee.com/api/Login", user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });

    }
}