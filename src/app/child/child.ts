import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  parentText = input<any>();

  text !:string;

  outPutEventFromChild  = output<string>()

  click(){
    this.outPutEventFromChild.emit("this is text from child...")
  }

  doSomething(){
    console.log("ll");
    
  }



}
