import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'listing-dialog',
    template: `
    <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
    <div class="modal d-block fade" 
      [ngClass]="{ show: showModal }"
      (click)="onClose()"
      id="listing-dialog" 
      tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
        <div class="modal-dialog" role="document" (click)="onDialogClick($event)">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>I was loaded via route</h5>
                    <button type="button"
                        class="close"
                        (click)="onClose()"
                        aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <p>Add some detail here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class ListingDialogComponent implements AfterViewInit {

    showModal = false;

    constructor(private router: Router) { }

    ngAfterViewInit() {
      this.showModal = true;
    }

    onClose() {
      this.showModal = false;
      //Allow fade out animation to play before navigating back
      setTimeout(
        () => this.router.navigate(['..']),
        100
      );
    }

    onDialogClick(event: UIEvent) {
      // Capture click on dialog and prevent it from bubbling to the modal background.
      event.stopPropagation();
      event.cancelBubble = true;
    }
}
