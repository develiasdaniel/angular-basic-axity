import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    });
    console.log(this.formLogin);
    
  }

  ngOnInit(): void {
  }

}
