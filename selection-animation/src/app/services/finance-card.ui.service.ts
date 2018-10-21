import {Injectable} from '@angular/core';

@Injectable()
export class FinanceCardUiService {
  public cardXPosition: number;
  public cardYPosition: number;

  public calculateCardCoordinates(element: any): void {
    this.cardXPosition = element.offsetLeft;
    this.cardYPosition = element.offsetTop;
  }

}
