import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject , Injectable } from '@angular/core';
import { Photo } from './photo';
const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + userName + '/photos');
    };

    listFromUserPaginated(userName: string,page:number) {
        const paginations = new HttpParams().append('page',page.toString())
        return this.http
            .get<Photo[]>(API + userName + '/photos', { params : paginations});
    };

}