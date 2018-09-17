import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()

export class ProjectService{
    constructor(private http:Http){
        console.log("Project Service Initialized");
         }
         
   getProject(){
       return this.http.get('/api/project')
         .pipe(map(res=>res.json()));
   }      
    
}


