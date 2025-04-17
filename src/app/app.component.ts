import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {Pezzettino1Component} from './pezzettino1/pezzettino1.component';
import {Pezzettino2Component} from './pezzettino2/pezzettino2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgForOf, Pezzettino1Component, Pezzettino2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{



}
