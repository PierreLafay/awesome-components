import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Comment } from '../../../core/models/comment.model'
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {animate, group, query, sequence, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      transition('void => *', [
        query('.comment-text, .comment-date', [
          style({
            opacity: 0
          }),
        ]),
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
          'background-color': 'rgb(201, 157, 242)',
        }),
        animate('250ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
          'background-color': 'white',
        })),
        group([
          sequence([
            animate('250ms', style({
              'background-color': 'rgb(255,7,147)'
            })),
            animate('250ms', style({
              'background-color': 'white'
            })),
          ]),          query('.comment-text', [
            animate('500ms', style({
              opacity: 1
            }))
          ]),
          query('.comment-date', [
            animate('1000ms', style({
              opacity: 1
            }))
          ]),
        ]),
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  commentControl!: FormControl;
  animationStates: { [key: number]: 'default' | 'active' } = {};

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.commentControl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    for (let index in this.comments) {
      this.animationStates[index] = 'default';
    }
  }

  onLeaveComment() {
    if (this.commentControl.invalid) {
      return;
    }
    // Récupération de l'id maximum
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentControl.value,
      createdDate: new Date(),
      userId: 1
    });
    this.newComment.emit(this.commentControl.value);
    this.commentControl.reset();
  }

  onListItemMouseEnter(index: number) {
    this.animationStates[index] = 'active';
  }

  onListItemMouseLeave(index: number) {
    this.animationStates[index] = 'default';
  }
}
