import { CommonModule } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angualar_project_v20');

   childComponent = viewChild<Child>('child');

  callDoSomething() {
    this.childComponent()?.doSomething()
  }

  bool = false;
  

   todoListArray = signal<string[]>([])


  enterToTheList(input : HTMLInputElement){
   
    console.log(`this is the input ${input}`)
    this.todoListArray.update(list => [...list , input.value])
    input.value = ''

    console.log(this.todoListArray());

    
    

  }

  childText = signal<string>('')

  getTextFromChild(msg : string){
    this.childText.set(msg)


  }
}
