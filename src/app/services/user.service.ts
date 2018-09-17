import {Http,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()

export class UserService{
    constructor(private http:Http){
        console.log('User service initialized');
        }
        
 getUser(){
     return this.http.get('/api/user')
        .pipe(map(res=>res.json()));
 }       
}