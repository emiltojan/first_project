import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects:Project[];

  constructor(private projectService:ProjectService){
    this.projectService.getProject().subscribe(projects=>{
        this.projects=projects;
    });

 }

  ngOnInit() {
  }

}
