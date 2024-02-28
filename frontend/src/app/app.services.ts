import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class ShareDataService {
    private shareTempRegEmail =  new BehaviorSubject<string>('');
    sharedTempEmail$ = this.shareTempRegEmail.asObservable();

    private shareTempRegUsername = new BehaviorSubject<string>('');
    sharedTempUsername$ = this.shareTempRegUsername.asObservable();

    private shareFormStatuses = new BehaviorSubject<boolean>(true);
    sharedFormStatuses$ = this.shareFormStatuses.asObservable();

    private sharePassword = new BehaviorSubject<string>('');
    sharedPassword$ = this.sharePassword.asObservable();

    private shareConfPassword = new BehaviorSubject<string>('');
    sharedConfPassword$ = this.shareConfPassword.asObservable();



    updateSharedTempEmail(info: string) {
        this.shareTempRegEmail.next(info);
    }

    updateSharedTempUsername(info: string){
        this.shareTempRegUsername.next(info);
    }

    updateSharedFormStatuses(info: boolean){
        this.shareFormStatuses.next(info);
    }

    updateSharedPassword(info: string){
        this.sharePassword.next(info);
    }

    updatedSharedConfPassword(info: string){
        this.shareConfPassword.next(info);
    }
}