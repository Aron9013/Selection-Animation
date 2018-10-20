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
    Animations.expandCard,
  ]
})

export class FinanceTypeCardComponent implements OnInit {
  public financeTypes: Array<IFinanceDataType> = [];

  public cardToggle: string = 'open';
  public expandToggle: string = 'initial';

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

    this.hideOtherCards(financeTypeId);
  }

  public moveCard(): void {
    for (let financeType of this.financeTypes) {
      if (financeType.id === this._selectedFinanceTypeId) {
        financeType.isSelected = true;
      }
    }
  }

  public expandCard(): void {
    this.expandToggle = (this.expandToggle === 'initial' ? 'expand' : 'initial')
  }

  private hideOtherCards(financeTypeId: string) {
    for (let financeType of this.financeTypes) {
      if (financeType.id !== financeTypeId) {
        financeType.isVisible = false;
      }
      if (financeType.id === financeTypeId) {
        this._selectedFinanceTypeId = financeType.id;
      }
    }
  }

}
