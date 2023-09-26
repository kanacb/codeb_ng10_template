import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/envirnments/environment';


@Injectable({
    providedIn: 'root'
})

export class RestclientService {

    envApi = environment.api;
    constructor(private http: HttpClient) {

    }

    public get(path: String){
      console.log(this.envApi);
      return this.http.get(this.envApi + path)
    }

}
