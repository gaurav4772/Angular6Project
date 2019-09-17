import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecords } from './records';
import { Observable } from 'rxjs';

@Injectable()
export class RecordsService{

    constructor(private http: HttpClient) {}

    getRecord(): Observable<IRecords[]>{
        return this.http.get<IRecords[]>("https://jsonplaceholder.typicode.com/posts");
    }
}