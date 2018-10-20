import {IFinanceDataType} from "../types/finance-data.type";

export class FinanceTypeDataMock {
  public Data: Array<IFinanceDataType> = [
    {
      id: 'mountain',
      name: 'Mountain View',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut mauris in ante sollicitudin interdum vitae vitae tellus. Quisque mollis sed nibh et sollicitudin. Vivamus eros urna, consequat non imperdiet nec, pellentesque non nunc. Etiam quis rhoncus eros.',
      image: 'https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80',
      isVisible: true,
      isSelected: false,
    },
    {
      id: 'city',
      name: 'City Skyline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque lacus. Ut sapien ipsum, pulvinar non vulputate eget, accumsan a lorem. Praesent euismod mi turpis. Quisque dictum quam eu ligula cursus, in commodo turpis posuere. Nullam tincidunt diam ut risus volutpat, posuere aliquet nisi sodales.',
      image: 'https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b41bd48dc97da6dafe203676b2594c0&auto=format&fit=crop&w=1950&q=80',
      isVisible: true,
      isSelected: false,
    },
    {
      id: 'road',
      name: 'Open Road',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur tincidunt risus, in fringilla quam fermentum id. Ut sollicitudin justo nec lacinia pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      image: 'https://images.unsplash.com/photo-1508781015212-46d58946bb05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39b69f4b9e54ea449f90e3d714bf9215&auto=format&fit=crop&w=1951&q=80',
      isVisible: true,
      isSelected: false,
    },
    {
      id: 'ocean',
      name: 'Ocean View',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum ligula. Mauris sollicitudin pellentesque ipsum, auctor viverra dui maximus at. Praesent tristique, nisl in finibus luctus, massa quam ultricies nibh, gravida facilisis arcu metus sed massa.',
      image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c92fa17c403874495c84c6f31f5ef403&auto=format&fit=crop&w=1950&q=80',
      isVisible: true,
      isSelected: false,
    }

  ]
}
