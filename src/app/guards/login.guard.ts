import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private router: Router
  ){}
  canActivate(){
  const isUserLogged =  this.storage.get('isUserLogged');
  if(isUserLogged){
    return true;
  }else{
    this.router.navigateByUrl('/login');
  }}
}
