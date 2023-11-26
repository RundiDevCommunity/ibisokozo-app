import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

constructor() { }


private _canGoBack: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
  true
);

get canGoBack$(): Observable<boolean> {
  return this._canGoBack.asObservable();
}

disableGoBack() {

  this._canGoBack.next(false)

}

enableGoBack() {
  this._canGoBack.next(true)

}


}
