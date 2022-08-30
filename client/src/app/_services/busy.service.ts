import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerSevice: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerSevice.show(undefined, {
      bdColor: "rgba(255,255,255,0)",
      color: "#334fb7"
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerSevice.hide();
    }
  }
}
