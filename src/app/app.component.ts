import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormComponent} from './common/form/form.component';
import {Store} from '@ngrx/store';
import {AppState} from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends FormComponent implements OnInit {
  title = 'pavasa-pse-ui';

  closeResult = '';
  showOTPPage = false;
  showLoginPage = true;

  constructor(private modalService: NgbModal, store: Store<AppState>) {
    super(store);
  }

  ngOnInit(): void {
    this.showOTPPage = false;
    this.showLoginPage = true;
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.showLoginPage = true;
      this.showOTPPage = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getOTP(): void {
    this.showLoginPage = false;
    this.showOTPPage = true;
  }

  verifyOTP(): void {
    this.showLoginPage = true;
    this.showOTPPage = false;
  }

  navigateNextPageOnSuccess(): void {
  }
}
