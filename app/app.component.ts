import { Component, OnInit } from '@angular/core';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
import { nanoid } from 'nanoid';

export let propertyModel: Object[] = [
  {
    id: 'RTA',
    level: 0,
    name: 'Residential Tower A',
    isInExpandState: true,
    count: 2,
    children: [
      {
        id: 'PFG',
        level: 1,
        name: 'Podium Floor Ground',
        count: 1,
        isInExpandState: true,
        children: [],
      },
      {
        id: 'PF',
        level: 1,
        name: 'Podium Floors',
        count: 3,
        isInExpandState: true,
        children: [],
      },
      {
        id: 'F',
        level: 1,
        name: 'Floors',
        count: 60,
        isInExpandState: true,
        children: [
          {
            id: 'Flats_012',
            level: 2,
            name: 'Flats',
            count: 1,
            isInExpandState: true,
            children: [
              {
                id: 'fgdf',
                level: 3,
                name: '1 BHK',
                count: 3,
                isInExpandState: true,
                children: [],
              },
              {
                id: 'fgdfdff',
                level: 3,
                name: '2 BHK',
                count: 3,
                isInExpandState: true,
                children: [],
              },
              {
                id: 'fgdfdfdf',
                level: 3,
                name: '3 BHK',
                count: 3,
                isInExpandState: true,
                children: [],
              },
            ],
          },
          {
            id: 'L',
            level: 1,
            name: 'Lifts',
            count: 1,
            isInExpandState: true,
            children: [],
          },
          {
            id: 'S',
            level: 1,
            name: 'Staircase',
            count: 1,
            isInExpandState: true,
            children: [],
          },
        ],
      },
    ],
  },
];
export let prop: Object[] = [];
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
         box-shadow:0 0 1px 0 rgb(0,0,0);
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
    .context-menu {
      display:flex;
      width: auto;
      background: white;
      border-radius: 5px;
      padding: 2px 0px;
      box-shadow: 0 0 1px 0 rgb(0 0 0 / 40%);
    }
    .context-menu .item{
      padding: 4px 5px;
      font-size: 15px;
      color:black;
      cursor:pointer;
      border-radius: inherit;
      transition:all .25s ease;
    }
    .context-menu .item:hover{
      background: #343434;
      color:white;
    }
    .d-flex{
      display:flex;
    }
    .align-items-center{
      align-items:center;
    }
    .justify-content-space-between{
      justify-content:space-around;
    }
    .gap-15{
      gap:15px;
    }
    .m-none{
      margin:0;
    }
    `,
  ],
})
export class AppComponent implements OnInit {
  sampleData = prop;
  items: any[];
  title: String;
  ngOnInit() {
    this.items = this.getItems(this.sampleData, null, 0);
    this.title = '';
  }
  showItems() {
    this.items = this.getItems(this.sampleData, null, 0);
  }
  expanded(item: any) {
    item.isInExpandState = !item.isInExpandState;
    this.items = this.getItems(this.sampleData, null, 0);
  }
  getItems(data, items, index) {
    data.forEach((x) => {
      if (!items) items = [];
      items.push(x);
      items[items.length - 1].index = index;
      if (x.children && x.isInExpandState)
        this.getItems(x.children, items, index + 1);
    });
    return items;
  }
  AddChild(event, item) {
    event.stopPropagation();
    let x = {
      id: nanoid(),
      parentId: item.id,
      name: '',
      count: 0,
      isInExpandState: false,
      children: [],
    };

    item.children.push(x);
    if (!item.isInExpandState) this.expanded(item);
    else {
      this.items = this.getItems(this.sampleData, null, 0);
    }
  }
  AddRow() {
    let x = {
      id: nanoid(),
      parentId: '0',
      name: '',
      count: null,
      isInExpandState: false,
      children: [],
    };
    prop.push(x);
    this.showItems();
  }
  AddName(event) {
    this.title = event.target.value;
  }
  changeName(event, item) {
    item.name = this.title;
  }
  deleteItem(event, item) {
    event.stopPropagation();
    this.findParentAndRemoveChild(prop, item.parentId, item.id);
    console.log(prop);
    this.sampleData = prop;
    this.showItems();
  }
  findParentAndRemoveChild(list, parentId, ItemId) {
    let spliceIndx = -1;
    list.forEach((e, j) => {
      if (e.parentId == '0' && e.id == ItemId) {
        spliceIndx = j;
        return list.splice(spliceIndx, 1);
      }
      if (e.id == parentId) {
        e.children.forEach((el, i) => {
          if (el.id == ItemId) {
            spliceIndx = i;
          }
        });
        return e.children.splice(spliceIndx, 1);
      }
      return this.findParentAndRemoveChild(e.children, parentId, ItemId);
    });
  }
  stopBubble(event) {
    event.stopPropagation();
  }
  Indent(event, item) {
    event.stopPropagation();
    let x = {
      id: nanoid(),
      parentId: item.id,
      name: '',
      count: 0,
      isInExpandState: true,
      children: [],
    };
    this.findItemInMainList(prop, item.id, x);
    this.sampleData = prop;
    this.showItems();
  }
  findItemInMainList(list, ItemId, newParent) {
    console.log(list);
    list.forEach((e) => {
      if (e.id == ItemId) {
        let childList = this.copyItemChildren(e.children, newParent);
        newParent.children = childList;
        e.children = [];
        e.children.push(newParent);
        return list;
      }
      return this.findItemInMainList(e.children, ItemId, newParent);
    });
  }
  copyItemChildren(list, Parent) {
    let newList = list.map((e) => {
      return { ...e, parentId: Parent.id };
    });
    return newList;
  }
  UnIndent(event, item) {}
}
