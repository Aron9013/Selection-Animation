import {Component, Input} from '@angular/core';
import {IFinanceDataType} from "../../types/finance-data.type";
import {Animations} from "../../animations/animations";

@Component({
  selector: 'finance-type-card',
  templateUrl: 'finance-type-card.component.html',
  styleUrls: ['finance-type-card.component.scss'],
  animations: [
    Animations.toggleText,
    Animations.toggleCard,
  ]
})

export class FinanceTypeCardComponent {
  @Input() public financeType: IFinanceDataType;
  public textToggle: string = 'open';
  public cardToggle: string = 'open';

  public selectFinanceType(): void {
    this.textToggle = (this.textToggle === 'open' ? 'close' : 'open');
    this.cardToggle = (this.cardToggle === 'open' ? 'close' : 'open');
  }

}
