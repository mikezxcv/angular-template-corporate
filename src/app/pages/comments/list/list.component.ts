import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { findAllCommentsInterface } from '../interfaces/findAllCommentsInterface';
import { CommentsService } from '../comments.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  formGroup!: FormGroup;
  commentsList!: findAllCommentsInterface[];
  dataLoaded: boolean = false;
  dtOptions: DataTables.Settings = {
    pagingType: 'simple',
    pageLength: 5,
    ordering: false,
  };
  constructor(private readonly commentsService: CommentsService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'List', active: true },
    ];
    this.getComments();
  }

  getComments(): void {
    this.commentsService.findAllComments().subscribe((response) => {
      console.debug(response);
      this.commentsList = response;
      this.dataLoaded = true; // Marcamos que los datos han sido cargados
    });
  }
}
