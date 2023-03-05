import { Component, OnInit } from '@angular/core';

export let propertyModel: Object[] = [
  {
    id: 'RTA',
    level: '0',
    name: 'Residential Tower A',
    isInExpandState: true,
    count: 2,
    children: [
      {
        id: 'PFG',
        level: '0.1',
        name: 'Podium Floor Ground',
        count: 1,
        isInExpandState: false,
        children: [],
      },
      {
        id: 'PF',
        level: 1,
        name: 'Podium Floors',
        count: 3,
        isInExpandState: false,
        children: [],
      },
      {
        id: 'F',
        level: 1,
        name: 'Floors',
        count: 60,
        isInExpandState: false,
        children: [
          {
            id: 'Flats_012',
            level: 2,
            name: 'Flats',
            count: 1,
            isInExpandState: false,
            children: [
              {
                id: 'fgdf',
                level: 3,
                name: '1 BHK',
                count: 3,
                isInExpandState: false,
                children: [],
              },
              {
                id: 'fgdfdff',
                level: 3,
                name: '2 BHK',
                count: 3,
                isInExpandState: false,
                children: [],
              },
              {
                id: 'fgdfdfdf',
                level: 3,
                name: '3 BHK',
                count: 3,
                isInExpandState: false,
                children: [],
              },
            ],
          },
          {
            id: 'L',
            level: 1,
            name: 'Lifts',
            count: 1,
            isInExpandState: false,
            children: [],
          },
          {
            id: 'S',
            level: 1,
            name: 'Staircase',
            count: 1,
            isInExpandState: false,
            children: [],
          },
        ],
      },
    ],
  },
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
       table {
         border-collapse: collapse;
       }
       p{
         margin-top:1rem;
         margin-bottom:1rem;
       }
       tr, td {
         border: 1px solid black;
         padding-left:10px;
       }
       .flex {
        display: flex;
      }
      .just-cont-space-btwn {
        justify-content: space-between;
      }
      .align-items-center {
        align-items: center;
      }
       `,
  ],
})
export class AppComponent implements OnInit {
  sampleData = propertyModel;
  items: any[];
  ngOnInit() {
    this.items = this.getItems(this.sampleData, null, 0);
  }

  expanded(item: any) {
    item.expanded = !item.expanded;
    this.items = this.getItems(this.sampleData, null, 0);
  }
  getItems(data, items, index) {
    data.forEach((x) => {
      if (!items) items = [];
      items.push(x);
      items[items.length - 1].index = index;
      if (x.children && x.expanded) this.getItems(x.children, items, index + 1);
    });
    return items;
  }
  AddChild(event, item) {
    event.stopPropagation();
    let x = {
      id: item.id + item.level,
      level: item.level + 1,
      name: 'Hello',
      count: 0,
      isInExpandState: true,
      children: [],
    };
    pushItem(item.level, item.index, x);
    console.log(event, item);
  }
}