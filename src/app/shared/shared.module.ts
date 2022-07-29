import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import {MaterialModule} from "./material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {IdentityPipe} from "./pipes/identity.pipe";
import {TimeAgoPipe} from "./pipes/timeago.pipe";
import {HighlightDirective} from "./directives/highlight.directive";

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    IdentityPipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    IdentityPipe,
    TimeAgoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
