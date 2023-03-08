import { Component, OnInit } from '@angular/core';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
import { nanoid } from 'nanoid';

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
      padding: 0;
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
      parentId: null,
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
    event.stopPropagation();
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
      if (e.parentId == null && e.id == ItemId) {
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
  UnIndent(event, item) {
    event.stopPropagation();
    this.findParentAndRemoveChild(prop, item.parentId, item.id);
    this.shiftItemByOneLevelUp(prop, item.parentId, item);
    this.sampleData = prop;
    this.showItems();
  }
  shiftItemByOneLevelUp(list, parentId, item) {
    list.forEach((e, i) => {
      if (e.id == parentId) {
        item.parentId = e.parentId;
        if (item.parentId == null) {
          list.splice(i + 1, 0, item);
        }
        return;
      }
      this.shiftItemByOneLevelUp(e.children, parentId, item);
      if (item.parentId == e.id) {
        e.children.push(item);
        return;
      }
    });
  }
}
