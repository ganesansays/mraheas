import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        console.log(state.url);

        if(localStorage.getItem('user') && localStorage.getItem('user') != '') {
            return true;
        }

        this.router.navigate(['login'], {queryParams: {url: state.url}});

        return false;
    }
 
}