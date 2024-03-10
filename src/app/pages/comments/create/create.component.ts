import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../comments.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { findAllCommentsInterface } from '../interfaces/findAllCommentsInterface';
import { saveCommentInterface } from '../interfaces/saveComentInterface';
import { firstValueFrom } from 'rxjs';
import { findAllPostsInterface } from '../interfaces/findAllPosts.interface';
import { findAllUsersInterface } from '../interfaces/findAllUsersInterface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  formGroup!: FormGroup;
  usersList!: findAllUsersInterface[];
  postsList!: findAllPostsInterface[];
  constructor(
    private readonly commentsService: CommentsService,
    private readonly router: Router
  ) {
    this.createFormGroup();
  }
  ngOnInit(): void {
    this.createFormGroup();
    this.getData();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      body: new FormControl('', Validators.required),
      postId: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
    });
  }

  getData() {
    this.commentsService.findAllUsers().subscribe((response) => {
      console.debug(response);
      this.usersList = response;
    });

    this.commentsService.findAllPosts().subscribe((response) => {
      console.debug(response);
      this.postsList = response;
    });
  }

  async saveComment() {
    let timerInterval: any;
    console.debug('this.formGroup', this.formGroup.value);
    const data: saveCommentInterface = {
      body: this.formGroup.get('body')?.value,
      postId: this.formGroup.get('postId')?.value,
      userId: this.formGroup.get('userId')?.value,
    };

    try {
      const response = await firstValueFrom(
        this.commentsService.saveComment(data)
      );

      Swal.fire({
        title: 'Order inserted successfully!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }

        // return to path route
        this.router.navigate(['/']);
      });
      console.debug('responseFromComponent.ts:', response);
    } catch (error) {
      const stringError = JSON.stringify(error);
      console.debug('error in saveComment:', error);
      // error handling with sweetalert2
      Swal.fire({
        title: stringError,
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });
    }
  }
}
