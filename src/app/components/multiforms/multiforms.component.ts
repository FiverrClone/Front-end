import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent implements OnInit{

  isLinear=false;
  hide = true;


  constructor(    
    private builder: FormBuilder ,  
    private _dialogRef: DialogRef<MultiformsComponent>,
    ){}

  ngOnInit(): void {}

  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',Validators.required),
      lastname:this.builder.control('',Validators.required),
      email:this.builder.control('',Validators.required),
      birthday: this.builder.control('',Validators.required),
      gender: this.builder.control('',Validators.required),
    }),
    contact: this.builder.group({
      userName:this.builder.control('',Validators.required),
      password:this.builder.control('',Validators.required),
    }),
    address: this.builder.group({
      roles:this.builder.control('',Validators.required),
    })
  });

  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Empregister.get("address") as FormGroup;
  }
  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value);
      this._dialogRef.close();      
    }
  }
} 
