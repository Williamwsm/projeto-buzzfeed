import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
title:string =""
questions:any
questionSelect:any
answers:string[] = []
questionIndex:number = 0
questionMaxIndez:number=0
finished:boolean =false

}
