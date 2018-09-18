import { Component, OnInit } from '@angular/core';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';
import {UserService} from '../../services/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  private rowData:User[];
  private columnDefs: ColDef[];

// gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  constructor(private userService:UserService){
    this.columnDefs = this.createColumnDefs();
}

  ngOnInit() {
    this.userService.getUser().subscribe(
      users => {
          this.rowData = users;
      },
      error => {
          console.log(error);
      }
  )
  }


    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params): void {
        this.api = params.api;
        this.columnApi = params.columnApi;

        this.api.sizeColumnsToFit();
    }

    // create some simple column definitions
    private createColumnDefs() {
        return [
            {field: '_id'},
            {field: 'firstName'},
            {field: 'lastName'}   
        ]
    }
}