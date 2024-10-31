import { Component } from '@angular/core';
import quizz_questions from "../../../app/quizz_questions.json";
import { __values } from 'tslib';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
[x: string]: any;
title:string =""
questions:any
questionSelect:any
answers:string[] = []
answerSelect:string=""
questionIndex:number = 0
questionMaxIndez:number=0
finished:boolean =false
constructor(){}
ngOnInit():void{
  if(quizz_questions){
    this.finished = false
    this.title = quizz_questions.title

    this.questions = quizz_questions.questions
    this.questionSelect =this.questions[this.questionIndex]
    this.questionIndex = 0
    this.questionMaxIndez = this.questions.length


  }


}
playerChoose(value:string){
  this.answers.push(value)
  this.nextStep()
  this
  console.log(this.answers)
}
  async nextStep(){
  const finalAnswer:string = await this.checkResult(this.answers)
  this.questionIndex +=1
  if(this.questionMaxIndez> this.questionIndex){
      this.questionSelect = this.questions[this.questionIndex]
  }else{
    this.finished = true
    this.answerSelect = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
  }
}
async checkResult(answers:string[]){
  const result = this.answers.reduce((previuous, current, i, arr)=>{
    if (arr.filter(item => item === previuous).length> arr.filter(item => item === current).length) {
      return previuous

    } else {
      return current

    }
  })
  return result
}


}




