import { ResolveStart, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: PhotoService) { }
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Photo[]> {
        const userName=route.params.nomeUsuario;
        return this.service.listFromUserPaginated(userName,1);
    }
}