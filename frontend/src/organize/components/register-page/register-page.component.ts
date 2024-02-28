import { Component, OnDestroy } from '@angular/core';
import { ShareDataService } from '../../../app/app.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnDestroy{
  NextStepEmail: boolean = false;

  goNextStepEmail(){
    this.NextStepEmail = !this.NextStepEmail
    //Depois, pegar o value dos inputs e colocar pra setarem ele aqui, assim salvando
    //as infos do usuário. Ao invés do código abaixo. (se for fazer isso, colocar os status
    //como var, para ser acessado globalmente)

    this.tempRegUser = '';
    this.password = '';
    this.passwordConf = '';
  }

  tempRegEmail: string = '';
  tempRegUser: string = '';
  password: string = '';
  passwordConf: string = '';
  messageError: string = '';

  private EmailManageSub: Subscription;
  private UsernameManageSub: Subscription;
  private PasswordManageSub: Subscription;
  private confPasswordManageSub: Subscription;


  constructor(private shareDataService: ShareDataService){

    this.EmailManageSub = this.shareDataService.sharedTempEmail$.subscribe((tempEmail) =>{
      this.tempRegEmail =  tempEmail;
    });

    this.UsernameManageSub = this.shareDataService.sharedTempUsername$.subscribe((tempUsername) =>{
      this.tempRegUser = tempUsername;
    })
    
    this.PasswordManageSub = this.shareDataService.sharedPassword$.subscribe((passwordCont) =>{
      this.password = passwordCont;
    })

    this.confPasswordManageSub = this.shareDataService.sharedConfPassword$.subscribe((passwordConfCont) => {
      this.passwordConf = passwordConfCont;
    })


  }


  checkCredentials() {
    const legalSimbols: RegExp = /^[a-zA-Z_]+$/;
    let usernameStatus: boolean = false;
    let passwordStatus: boolean = false;
    let passwordConfStatus: boolean = false;
  
    console.log(usernameStatus);
    console.log(passwordStatus)
    console.log(passwordConfStatus)
    console.log(this.tempRegUser)
    console.log(this.password)
    console.log(this.passwordConf)

    if (this.tempRegUser) {
        if (legalSimbols.test(this.tempRegUser)) {
        console.log('ok');
        this.messageError = '';
        usernameStatus = true;

        } else {
        console.log('no');
        this.messageError = `Please, only use letters or '_' in your username.`;
        usernameStatus = false;
        }

    }else {
      console.log('username empty');
      this.messageError = 'Username field is empty!';
      usernameStatus = false;
    }
  
    if (this.password) {
      console.log('pass ok!');
      console.log(this.password);
      this.messageError = '';
      passwordStatus = true;

    } else if(usernameStatus){
      console.log('Password field is empty!');
      this.messageError = 'Password field is empty!';
      passwordStatus = false;
    }
  
    if (passwordStatus && this.passwordConf) {
      if (this.passwordConf != this.password) {
        console.log("don't match");
        this.messageError = `Passwords don't match!`;
        passwordConfStatus = false;

      }else{
        console.log('confok');
        this.messageError = '';
        passwordConfStatus = true;
      }

    }else if (passwordStatus){
      console.log('please repeat');
      this.messageError = `Please, repeat your password!`;
      passwordConfStatus = false;
    }
  

    // Mova a condição para o final da função
    if (usernameStatus && passwordStatus && passwordConfStatus) {
      console.log('foi!');
      this.goNextStepEmail();
    }
  }

  ngOnDestroy(){
    this.EmailManageSub.unsubscribe();
    this.UsernameManageSub.unsubscribe();
    this.PasswordManageSub.unsubscribe();
    this.confPasswordManageSub.unsubscribe();
  }

}
