import { Component, OnDestroy } from '@angular/core';
import { ShareDataService } from '../../../../app/app.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-next-step-email',
  templateUrl: './register-next-step-email.component.html',
  styleUrl: './register-next-step-email.component.css'
})
export class RegisterNextStepEmailComponent implements OnDestroy{

  tempRegUsername: string = '';
  tempRegEmail: string = '';
  formStatus: boolean = false;

  private UsernameManageSub: Subscription;

  constructor(private sharedDataService: ShareDataService){
    this.UsernameManageSub = this.sharedDataService.sharedTempUsername$.subscribe((tempUsername) =>{
      this.tempRegUsername =  tempUsername;
    })
  }

  
  sendTempEmail(){
    this.sharedDataService.updateSharedTempUsername(this.tempRegUsername);
  }

  sendFormStatus(){
    this.sharedDataService.updateSharedFormStatuses(this.formStatus);
  }

  
  ngOnDestroy(){
    this.UsernameManageSub.unsubscribe();
  }
}
