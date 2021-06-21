import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
ngOnInit(){

}
constructor(private route: ActivatedRoute,
  private router: Router ){

  }
goto() {
  this.router.navigate(['/compte', ]);
}
}
