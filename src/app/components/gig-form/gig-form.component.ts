import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Gig } from 'src/app/model/gig.model';
import { GigService } from 'src/app/services/gig.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-gig-form',
  templateUrl: './gig-form.component.html',
  styleUrls: ['./gig-form.component.css']
})
export class GigFormComponent implements OnInit {

  GigForm: FormGroup;
  errorMsg: any;
  gigs: any;
  showForm = false;
  editForm = false;
  selectedFile: any;
  category: string[] = ['FrontEnd', 'BackEnd', 'Mobile', 'Programmation',];
  
  gigId: any;


  gig: Gig = {
    id: '1',
    name: "angular",
    category: "frontEnd",
    description: "single page application using angular",
    price: 100,
    img: "../../assets/image-4.jpeg",
    sellerName: "MOhammed",
    sellerId: "1",
    sellerImg: "../../assets/user",
    gigDate: "10/10/2020",
  }

  constructor(
    private _gig: GigService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<GigFormComponent>,
    private _router: Router,
    private _snackbar: SnackBarService,
    private Activeroute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.GigForm = this._fb.group({
      title: this._fb.control(""),
      category: this._fb.control(""),
      description: this._fb.control(""),
      price: this._fb.control(""),
      file: this._fb.control(""),

    })
  }

  ngOnInit(): void {
    this.gigId=this.Activeroute.snapshot.paramMap.get('gigId')
    this.GigForm.patchValue(this.data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.GigForm.valid) {
      const { price, category, description, title } = this.GigForm.value;
      const input={ price, category, description, title }

      if (this.data) {
        this._gig.updateGig(this.data.id, input).subscribe(({ data }) => {
          console.log(data);
          this._dialogRef.close();
          this._snackbar.openSnackBar('Gig updated successfully');
          this._gig.getGigs();
        })
      }
      else {
        this._gig.createGig(input).subscribe(({ data }) => {
          console.log(data);
          this._dialogRef.close();
          this._snackbar.openSnackBar('Gig added successfully');
          this._gig.getGigs();
        })
      }
      
    }
  }

  deleteGig(){
    this._gig.deleteGig(this.gigId).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar('Gig deleted!', 'done');
        this._gig.getGigs();
      },
      error: console.log,
    });
  }

}
