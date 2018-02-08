import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public text = "Interpolation";
  public siteURL = window.location.href;
  public boolvar = false;
  public redcolor = "text-danger";
  public variable = "";
  public eventvar;
  public valueref;
  public messageclass = {
    "text-danger" : this.boolvar,
    "text-italic" : !this.boolvar
  }
  public messagestyle = {
    color : "blue",
    fontStyle : "italic"
  }

  constructor() { }

  ngOnInit() {
  }



  interpolationfunc()
  {
      return "I am Function";
  }

  onclick(event)
  {
    this.eventvar = event.type;
    this.variable = "This is after you push the button";

  }

  fun(x)
  {
    this.valueref = x;
  }
}
