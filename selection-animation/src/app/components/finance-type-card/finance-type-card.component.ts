import {Component, OnInit} from '@angular/core';
import {IFinanceDataType} from "../../types/finance-data.type";
import {Animations} from "../../animations/animations";
import {FinanceTypeDataMock} from "../../mock-data/finance-type-data.mock";
import {FinanceCardUiService} from "../../services/finance-card.ui.service";

@Component({
  selector: 'finance-type-card',
  templateUrl: 'finance-type-card.component.html',
  styleUrls: ['finance-type-card.component.scss'],
  animations: [
    Animations.toggleText,
    Animations.toggleCard,
    Animations.hideCard,
    Animations.moveCard,
    Animations.expandContent,
  ]
})

export class FinanceTypeCardComponent implements OnInit {
  public financeTypes: Array<IFinanceDataType> = [];

  public cardToggle: string = 'open';

  public cardXPosition: string;
  public cardYPosition: string;

  private _financeDataTypeMock: FinanceTypeDataMock;
  private _selectedFinanceTypeId: string;
  private _financeCardUiService: FinanceCardUiService;

  constructor(financeDataTypeMock: FinanceTypeDataMock, financeCardUiService: FinanceCardUiService) {
    this._financeDataTypeMock = financeDataTypeMock;
    this._financeCardUiService = financeCardUiService;
  }

  ngOnInit() {
    this.financeTypes = this._financeDataTypeMock.Data;
  }

  public selectFinanceType(financeTypeId: string, event: any): void {
    if (!event.target.classList.contains('finance-card')) {
      return;
    }
    this._financeCardUiService.calculateCardCoordinates(event.target);
    this.cardXPosition = this._financeCardUiService.cardXPosition + 'px';
    this.cardYPosition = this._financeCardUiService.cardYPosition + 'px';

    this.cardToggle = (this.cardToggle === 'open' ? 'close' : 'open');

    this._selectedFinanceTypeId = financeTypeId;

    this.hideOtherCards();
  }

  public backToSelection(): void {
    this.hideOtherCards();
    this.cardToggle = (this.cardToggle === 'open' ? 'close' : 'open');
  }

  public moveCard(): void {
    for (let financeType of this.financeTypes) {
      if (financeType.id === this._selectedFinanceTypeId) {
        financeType.isSelected = !financeType.isSelected;
      }
    }
  }

  private hideOtherCards() {
    for (let financeType of this.financeTypes) {
      if (financeType.id !== this._selectedFinanceTypeId) {
        financeType.isVisible = !financeType.isVisible;
      }
    }
  }


}
