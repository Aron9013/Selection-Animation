import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class FinanceCardUiService {
  public cardXPosition: number;
  public cardYPosition: number;

  public calculateCardCoordinates(element: any, elRef: ElementRef): void {
    this.cardXPosition = element.offsetLeft - (elRef.nativeElement.parentElement.offsetLeft + 15);
    this.cardYPosition = element.offsetTop;
  }

}
