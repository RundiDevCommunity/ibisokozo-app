import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { SetAuthenticated } from 'src/app/states/auth/auth.state';
import { OpenDialog } from 'src/app/states/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordVisible = false;
  isLoading: boolean = false;

  loginForm = new FormGroup({
    username:new FormControl<string>('', Validators.required),
    password:new FormControl<string>('', Validators.required),

    
  })


  constructor(
    private authService : AuthService,
    private store : Store,
    private router : Router
  ){
//
  }

ngOnInit(){
//
}
  



  login(){
    this.isLoading=true

  this.authService.login(this.loginForm.value).subscribe({
    next :(response) =>{
    this.isLoading=false


      console.log('olllaah',response)

      this.store.dispatch(new SetAuthenticated(true, response.token))
      this.router.navigate(['/'])



      
    },
    error : (error)=>{
      this.isLoading=false


      let errorMessage;

      if(error.detail){
        errorMessage=error.detail
      }else{
        errorMessage='hari ivyagenze nabi, subiramwo ugerageze'
      }

      console.log(error);

      const data={
        type: 'failed',
        title: 'Failed to login',
        message: errorMessage,
}
      this.store.dispatch( new OpenDialog(data))
      

    }
  })
  }



  togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
  }
}
