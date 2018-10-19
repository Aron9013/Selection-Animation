import {IFinanceDataType} from "../types/finance-data.type";

export class FinanceTypeDataMock {
  public Data: Array<IFinanceDataType> = [
    {
      id: 'HP',
      name: 'Hire Purchase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut mauris in ante sollicitudin interdum vitae vitae tellus. Quisque mollis sed nibh et sollicitudin. Vivamus eros urna, consequat non imperdiet nec, pellentesque non nunc. Etiam quis rhoncus eros.',
      image: 'https://www.media.volvocars.com/image/low/238222/1_1/5'
    },
    {
      id: 'PCP',
      name: 'Personal Contract Purchase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque lacus. Ut sapien ipsum, pulvinar non vulputate eget, accumsan a lorem. Praesent euismod mi turpis. Quisque dictum quam eu ligula cursus, in commodo turpis posuere. Nullam tincidunt diam ut risus volutpat, posuere aliquet nisi sodales.',
      image: 'https://www.media.volvocars.com/image/low/238221/1_1/5'
    },
    {
      id: 'PCH',
      name: 'Personal Contract Hire',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur tincidunt risus, in fringilla quam fermentum id. Ut sollicitudin justo nec lacinia pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      image: 'https://www.media.volvocars.com/image/low/236079/1_1/5'
    },
    {
      id: 'Cash',
      name: 'Self Fund',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum ligula. Mauris sollicitudin pellentesque ipsum, auctor viverra dui maximus at. Praesent tristique, nisl in finibus luctus, massa quam ultricies nibh, gravida facilisis arcu metus sed massa.',
      image: 'https://www.media.volvocars.com/image/low/238459/1_1/5'
    }

  ]
}
