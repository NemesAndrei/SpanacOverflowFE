import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Injectable()
export class IsUserGuard implements CanActivate{

      constructor(private router:Router, private authenticationService:AuthenticationService) {

      }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          if (this.authenticationService.isUser()) {
              return true;
          }
          this.router.navigate(['/admin']);
          localStorage.removeItem('user');
          return false;
      }
}
