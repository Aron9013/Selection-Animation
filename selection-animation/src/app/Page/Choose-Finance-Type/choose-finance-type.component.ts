import {Component, OnInit} from '@angular/core';
import {IFinanceDataType} from "../../types/finance-data.type";
import {FinanceTypeDataMock} from "../../mock-data/finance-type-data.mock";
import {Animations} from "../../animations/animations";

@Component({
  selector: 'choose-finance-type',
  templateUrl: 'choose-finance-type.component.html',
  styleUrls: ['choose-finance-type.component.scss'],
  animations: [
    Animations.hideCard
  ]
})

export class ChooseFinanceTypeComponent implements OnInit {
  public financeTypes: Array<IFinanceDataType> = [];

  private _financeDataTypeMock: FinanceTypeDataMock;
  private _selectedFinanceTypeId: string;

  constructor(financeDataTypeMock: FinanceTypeDataMock) {
    this._financeDataTypeMock = financeDataTypeMock;
  }

  ngOnInit() {
    this.financeTypes = this._financeDataTypeMock.Data;
  }

  public onClicked(financeTypeId: string): void {
    for (let financeType of this.financeTypes) {
      if (financeType.id !== financeTypeId) {
        financeType.isVisible = false;
      }
      if (financeType.id === financeTypeId) {
        financeType.isSelected = true;
        this._selectedFinanceTypeId = financeType.id;
      }
    }
  }

  public removeCard(): void {
    for (let financeType of this.financeTypes) {
      if (financeType.id !== this._selectedFinanceTypeId) {
        financeType.isDisplayed = false;
      }
    }
  }

}
