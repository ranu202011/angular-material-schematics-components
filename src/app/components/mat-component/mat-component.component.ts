import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mat-component",
  template: `
    <header>
      <app-header></app-header>
    </header>

    <app-emp-dashboard></app-emp-dashboard>

    <section>
      <app-employee-address></app-employee-address>
    </section>
    <section>
      <app-emp-data-table></app-emp-data-table>
    </section>
    <footer>
      <app-emp-herirachy></app-emp-herirachy>
    </footer>
  `,
  styleUrls: ["./mat-component.component.scss"],
})
export class MatComponentComponent implements OnInit {
  rowNum: number = 1;
  colNum: number = 1;
  constructor() {}

  ngOnInit() {}
}
