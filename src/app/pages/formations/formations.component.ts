import { DialogConfirmationComponent } from './../../dialogs/dialog-confirmation/dialog-confirmation.component';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  public matDataSource: MatTableDataSource<Formation> = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'title', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private formationService: FormationService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.formationService.getFormations().subscribe(res =>{
        this.matDataSource = new MatTableDataSource<Formation>(res);
        this.matDataSource.sort = this.sort;
        this.matDataSource.paginator = this.paginator;

    });
  }

  public delete(formation: Formation, index = 0) {

    const dialog = this.dialog.open(DialogConfirmationComponent, {
      data : formation
    });

    dialog.afterClosed().subscribe(response =>{

      this.matDataSource.data.splice(index, 1);
      this.matDataSource._updateChangeSubscription();

    })
  }

}
