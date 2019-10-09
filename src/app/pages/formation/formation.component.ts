import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  public formation: Formation = new Formation();
  public previewMode = true;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private router: Router,
    private formationService: FormationService
    ) { }

  ngOnInit() {
    this.activatedRouteService.params.subscribe( (data: Params) =>{
      if ( +data['id'] ) {
        this.formationService.getById(+data['id']).subscribe((res: Formation) =>{
          this.formation = res;
        });
      }
    });
  }



  private _timeout : any = null;
  public autoSave(myForm: NgForm){
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
    this._timeout = window.setTimeout(() => {
      this.saveFinal(myForm, false);
    }, 500);
  }

  public saveFinal(myForm: NgForm, redirection = true) {
    if (myForm.form.touched) {
      this.formationService.save(this.formation).subscribe((res: Formation) => {
        if (redirection) {
          this.router.navigate(['/formations']);
        }
      });
    }
  }

  public shareFormation(data: boolean){
      alert("Une alert exécutée depuis le FormationComponent");
  }

}
