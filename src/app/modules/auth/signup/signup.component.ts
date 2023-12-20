import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { OpenDialog } from 'src/app/states/notification';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  passwordVisible = false;
  registerForm:FormGroup;
  isLoading:boolean = false;

  constructor(
    private authService : AuthService,
    private store : Store
  ){
    this.registerForm=new FormGroup({
      username:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      first_name:new FormControl('', Validators.required),
      last_name:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      password2:new FormControl('', Validators.required),


    })
  }

  ngOnInit(){
  }


  register(){

    this.isLoading=true
    const body={
      username:this.registerForm.value.username,
      email:this.registerForm.value.email,
      first_name:this.registerForm.value.first_name,
      last_name:this.registerForm.value.last_name,
      password:this.registerForm.value.password2,
      groups:[]

    }



    this.authService.register(body).subscribe({
      next:(response)=>{
        this.isLoading=false

        if(response.username== this.registerForm.value.username){
          const data={
            type: 'success',
            title: '',
            message: 'wiyandishije neza, genda winjire',
    }
          this.store.dispatch( new OpenDialog(data))
        }     else if(response.username !== this.registerForm.value.username){
          const data={
            type: 'failed',
            title: '',
            message: 'iryo zina (username) wakoresheje ryaramaze gukoreshwa n\'uwundi, gerageza irindi',
    }
          this.store.dispatch( new OpenDialog(data))
        }


      }, error:(err:any)=>{
        this.isLoading=false

        const data={
          type: 'failed',
          title: '',
          message: 'ivyo wasavye ntivyakunze, gerageza gusubiramwo',
  }
        this.store.dispatch( new OpenDialog(data))

      }
    })
  }

  togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
  }

}
