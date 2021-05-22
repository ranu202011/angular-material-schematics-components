import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-header",
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === true"
      >
        <mat-toolbar>
          <button mat-icon-button (click)="drawer.toggle()">
            <span>Menu</span>
          </button>
        </mat-toolbar>
        <mat-nav-list>
          <a mat-list-item href="#">Home</a>
          <a mat-list-item href="#">Contact</a>
          <a mat-list-item href="#">Services</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>

          <button mat-icon-button (click)="drawer.toggle()">
            <span>Mat</span>
          </button>
        </mat-toolbar>
        <!-- Add Content Here -->
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
