import { Component, OnDestroy } from '@angular/core';
import { ShareDataService } from '../../../../app/app.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-first-step',
  templateUrl: './register-first-step.component.html',
  styleUrl: './register-first-step.component.css'
})
export class RegisterFirstStepComponent implements OnDestroy{
  tempRegUsername: string = '';
  passwordContent: string = '';
  confPasswordContent: string = '';
  tempRegEmail: string = '';
  private EmailManageSub: Subscription;

  messageError: string = '';
  formStatus: boolean = true;


  constructor(private shareDataService: ShareDataService){
    this.EmailManageSub = this.shareDataService.sharedTempEmail$.subscribe((tempEmail) =>{
      this.tempRegEmail = tempEmail;
    })
  }
    
  sendFormStatus(){
    this.shareDataService.updateSharedFormStatuses(this.formStatus);
  }

  sendTempUsername(){
    this.shareDataService.updateSharedTempUsername(this.tempRegUsername);
  }

  sendPassword(){
    this.shareDataService.updateSharedPassword(this.passwordContent);
  }

  sendPasswordConf(){
    this.shareDataService.updatedSharedConfPassword(this.confPasswordContent);
  }



  ngOnDestroy(): void {
    this.EmailManageSub.unsubscribe();
  }
}
