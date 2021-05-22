import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

    <router-outlet></router-outlet>
    <app-mat-component></app-mat-component>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mat";
}
