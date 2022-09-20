import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
// Same as javascript class, but in TS
  private count : number = 5; // Angular bound a TS variable to html.
  // This is like a member variable of this component class.

  @Input()
  title: String = "";
  
  constructor() { }

  ngOnInit(): void {

  }

  public increment(): void {
    this.count += 1;
  }

  public getCount(): number {
    return this.count;
  }

}
