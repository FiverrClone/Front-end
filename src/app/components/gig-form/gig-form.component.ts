import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Gig } from 'src/app/model/gig.model';
import { GigService } from 'src/app/services/gig.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gig-form',
  templateUrl: './gig-form.component.html',
  styleUrls: ['./gig-form.component.css']
})
export class GigFormComponent implements OnInit{
  
  GigForm:FormGroup;
  errorMsg: any;
  gigs:any;
  showForm = false;
  editForm = false;
  selectedFile: any;

  gig:Gig={
    id: '1',
    name: "angular",
    category:"frontEnd",
    description:"single page application using angular",
    price: 100,
    img:"../../assets/image-4.jpeg",
    sellerName:"MOhammed",
    sellerId:"1",
    sellerImg:"../../assets/user",
    gigDate:"10/10/2020",
  }

  constructor(
    private _gig:GigService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<GigFormComponent>,
    private _router: Router,
  ){
    this.GigForm = this._fb.group({
      title: this._fb.control(""),
      category: this._fb.control(""),
      description: this._fb.control(""),
      price: this._fb.control(""),
      file: this._fb.control(""),

    })
  }
  
  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave(){
    if(this.GigForm.valid){
      const { price, category, description, title} = this.GigForm.value;
     
      this._gig.createGig(price,category,description,title).subscribe(({data})=>{
        console.log(data);
      })
      
      this._dialogRef.close();      
    }

  }
  updateGig(){
 
  }

}
