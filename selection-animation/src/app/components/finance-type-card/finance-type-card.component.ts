import {Component, ElementRef, OnInit} from '@angular/core';
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
  private _elRef: ElementRef;

  constructor(financeDataTypeMock: FinanceTypeDataMock, financeCardUiService: FinanceCardUiService, elRef: ElementRef) {
    this._financeDataTypeMock = financeDataTypeMock;
    this._financeCardUiService = financeCardUiService;
    this._elRef = elRef;
  }

  ngOnInit() {
    this.financeTypes = this._financeDataTypeMock.Data;
  }

  public selectFinanceType(financeTypeId: string, event: Event): void {
    this._financeCardUiService.calculateCardCoordinates(event.target, this._elRef);
    this.cardXPosition = this._financeCardUiService.cardXPosition + 'px';
    this.cardYPosition = this._financeCardUiService.cardYPosition + 'px';

    this.cardToggle = (this.cardToggle === 'open' ? 'close' : 'open');

    this._selectedFinanceTypeId = financeTypeId;

    this.hideOtherCards();
  }

  public moveCard(): void {
    for (let financeType of this.financeTypes) {
      if (financeType.id === this._selectedFinanceTypeId) {
        financeType.isSelected = !financeType.isSelected;
      }
    }
  }

  public backToSelection(): void {
  }

  private hideOtherCards() {
    for (let financeType of this.financeTypes) {
      if (financeType.id !== this._selectedFinanceTypeId) {
        financeType.isVisible = !financeType.isVisible;
      }
    }
  }

}
