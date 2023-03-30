import { Component, OnInit } from '@angular/core';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
import { nanoid } from 'nanoid';

export let prop: Object[] = [];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
  `,
  ],
})
export class AppComponent {
  structure = {
    rootStructure: {
      label: 'PT 1',
      count: 1,
      metrics: {
        Doors: 160,
        CA: 159000,
        SA: 203600,
        BUA: 268000,
        BalconyArea: 600,
      },
      substructures: [
        {
          label: 'Main Building Complex',
          count: 1,
          metrics: {
            Doors: 156,
            CA: 153000,
            SA: 195600,
            BUA: 258000,
            BalconyArea: 600,
          },
          substructures: [
            {
              label: 'Residential Tower GOT',
              count: 1,
              metrics: {
                Doors: 26,
                CA: 25500,
                SA: 32600,
                BUA: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    CA: 1500,
                    SA: 2000,
                    BUA: 4000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: {
                    Doors: 2,
                    CA: 500,
                    SA: 600,
                    BUA: 1000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: {
                    Doors: 8,
                    CA: 11000,
                    SA: 14000,
                    BUA: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        CA: 1000,
                        SA: 1500,
                        BUA: 2000,
                        BalconyArea: 30,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: {
                        Doors: 1,
                        CA: 2000,
                        SA: 2500,
                        BUA: 3000,
                        BalconyArea: 40,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: {
                        Doors: 2,
                        CA: 3000,
                        SA: 3500,
                        BUA: 4000,
                        BalconyArea: 50,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                  ],
                  id: nanoid(),
                },
              ],
              id: nanoid(),
            },
            {
              label: 'Iconic Tower',
              count: 2,
              metrics: {
                Doors: 26,
                CA: 25500,
                SA: 32600,
                BUA: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    CA: 1500,
                    SA: 2000,
                    BUA: 4000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: {
                    Doors: 2,
                    CA: 500,
                    SA: 600,
                    BUA: 1000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: {
                    Doors: 8,
                    CA: 11000,
                    SA: 14000,
                    BUA: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        CA: 1000,
                        SA: 1500,
                        BUA: 2000,
                        BalconyArea: 30,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: {
                        Doors: 1,
                        CA: 2000,
                        SA: 2500,
                        BUA: 3000,
                        BalconyArea: 40,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: {
                        Doors: 2,
                        CA: 3000,
                        SA: 3500,
                        BUA: 4000,
                        BalconyArea: 50,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                  ],
                  id: nanoid(),
                },
              ],
              id: nanoid(),
            },
            {
              label: 'Super Hero Tower',
              count: 3,
              metrics: {
                Doors: 26,
                CA: 25500,
                SA: 32600,
                BUA: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    CA: 1500,
                    SA: 2000,
                    BUA: 4000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: {
                    Doors: 2,
                    CA: 500,
                    SA: 600,
                    BUA: 1000,
                    BalconyArea: 0,
                  },
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: {
                    Doors: 8,
                    CA: 11000,
                    SA: 14000,
                    BUA: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        CA: 1000,
                        SA: 1500,
                        BUA: 2000,
                        BalconyArea: 30,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: {
                        Doors: 1,
                        CA: 2000,
                        SA: 2500,
                        BUA: 3000,
                        BalconyArea: 40,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: {
                        Doors: 2,
                        CA: 3000,
                        SA: 3500,
                        BUA: 4000,
                        BalconyArea: 50,
                      },
                      substructures: [],
                      id: nanoid(),
                    },
                  ],
                  id: nanoid(),
                },
              ],
              id: nanoid(),
            },
          ],
          id: nanoid(),
        },
      ],
      id: nanoid(),
    },
    metricItems: [
      {
        label: 'BUA',
        unit: 'sqft',
      },
      {
        label: 'SA',
        unit: 'sqft',
      },
      {
        label: 'CA',
        unit: 'sqft',
      },
      {
        label: 'Doors',
        unit: 'Nos',
      },
      {
        label: 'BalconyArea',
        unit: 'sqft',
      },
    ],
    summary: {
      label: 'TBUA',
      name: 'Total BUA',
      formula: 'sum of all BUA',
      result: 268000,
    },
    propertyModelId: 16,
    buyerId: 1,
    projectId: 1,
    estimateId: 1,
    costPlanId: 1,
    revisionId: 1,
    status: {},
    addedOn: 1678337529000,
    updatedOn: 1678337529000,
  };

  flatStructure = [];

  ngOnInit() {
    this.flatTree(this.structure.rootStructure, 0, null);
    console.log(this.flatStructure);
    this.addScrollableEvents();
  }
  addScrollableEvents() {
    var MOUSE_OVER = false;
    document
      .getElementById('tableWrap')
      .addEventListener('wheel', function (e) {
        if (MOUSE_OVER) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          e.returnValue = false;
          return false;
        }
      });

    document
      .getElementById('table-scroll-employees')
      .addEventListener('mouseenter', function () {
        MOUSE_OVER = true;
      });
    document
      .getElementById('table-scroll-employees')
      .addEventListener('mouseleave', function () {
        MOUSE_OVER = false;
      });

    document
      .getElementById('table-scroll-employees')
      .addEventListener('mousewheel', function (e: WheelEvent) {
        var delta = e.deltaY;
        if (delta > 0) {
          document.getElementById('table-scroll-tasks').scrollBy(0, 30);
        } else {
          //go down
          document.getElementById('table-scroll-tasks').scrollBy(0, -30);
        }
      });
  }

  scrollPos(event) {
    var rightScrollPos =
      document.getElementById('table-scroll-tasks').scrollTop;

    document.getElementById('table-scroll-employees').scrollTop =
      rightScrollPos;
  }

  flatTree(obj, l, parentId) {
    let level = l;
    let newObject = {
      level: level,
      id: obj.id,
      label: obj.label,
      count: obj.count,
      metrics: [...this.flatMetric(obj.metrics)],
      parentId,
      isLeaf: obj.substructures.length == 0 ? true : false,
    };
    this.flatStructure.push(newObject);
    if (obj.substructures.length == 0) {
      return;
    } else {
      obj.substructures.forEach((e) => {
        this.flatTree(e, level + 1, obj.id);
      });
    }
  }

  triggerAreaField(event, item, metric) {
    if (item.isLeaf) {
      let initialVal = metric.value;
      metric.value = null;
      setTimeout(() => {
        document.getElementById('inputField' + metric.id).focus();
        (<HTMLInputElement>(
          document.getElementById('inputField' + metric.id)
        )).value = initialVal;
      });
    }
  }
  changeArea(event, item, metric) {
    let int = Number(event.target.value.trim());
    if (int > -1) {
      metric.value = int;
      this.calculateArea(item.parentId, metric.label);
    }
  }
  calculateArea(parentId, label) {
    let sum = 0;
    if (parentId == null) {
      return;
    }
    this.flatStructure.forEach((e) => {
      if (e.parentId === parentId) {
        let value;
        e.metrics.forEach((el) => {
          if (el.label === label) {
            value = el.value;
          }
        });
        sum += e.count * value;
      }
    });
    this.flatStructure.forEach((e) => {
      if (e.id === parentId) {
        e.metrics.forEach((el) => {
          if (el.label === label) {
            el.value = sum;
          }
        });
        this.calculateArea(e.parentId, label);
      }
    });
  }
  flatMetric(metric) {
    let objList = [];
    if (metric == null) {
      this.structure.metricItems.forEach((e) => {
        let x = {
          label: e.label,
          value: 0,
          id: nanoid(),
        };
        objList.push(x);
      });
    } else {
      this.structure.metricItems.forEach((e) => {
        let x = {
          label: e.label,
          value: metric[e.label],
          id: nanoid(),
        };
        objList.push(x);
      });
    }
    return objList;
  }
}
