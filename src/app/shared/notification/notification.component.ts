import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { DialogState } from 'src/app/states/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
notification:any;
notification$: any;
showNotification=false;

  constructor(
    private store: Store,
) {
    this.notification$ = this.store.select(DialogState.GetDialog);
  
}
  ngOnInit(): void {
    this.notification$.subscribe({
        next: (dialog:any) => {
            this.notification = dialog;
            console.log(dialog.type);
            
         if (
                this.notification.type === 'success' ||
                this.notification.type === 'failed'
            ) {
                this.showNotification = true;
                setTimeout(() => {
                    this.showNotification = false;
                    console.log('shows notification popup');
                }, 500000);
            }
        },
    });
}

}
