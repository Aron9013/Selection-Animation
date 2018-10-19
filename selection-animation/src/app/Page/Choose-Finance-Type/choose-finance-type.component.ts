import {Component, OnInit} from '@angular/core';
import {IFinanceDataType} from "../../types/finance-data.type";
import {FinanceTypeDataMock} from "../../mock-data/finance-type-data.mock";

@Component({
  selector: 'choose-finance-type',
  templateUrl: 'choose-finance-type.component.html',
  styleUrls: ['choose-finance-type.component.scss']
})

export class ChooseFinanceTypeComponent implements OnInit {
  public financeTypes: Array<IFinanceDataType> = [];

  private _financeDataTypeMock: FinanceTypeDataMock;

  constructor(financeDataTypeMock: FinanceTypeDataMock) {
    this._financeDataTypeMock = financeDataTypeMock;
  }

  ngOnInit() {
    this.financeTypes = this._financeDataTypeMock.Data;
  }
}
