import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Injectable()
export class IsAdminGuard implements CanActivate{

  constructor(private router:Router, private authenticationService:AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/home']);
    localStorage.removeItem('user');
    return false;
  }
}
