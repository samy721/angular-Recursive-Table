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
        ca: 159000,
        sa: 203600,
        bua: 268000,
        BalconyArea: 600,
      },
      substructures: [
        {
          label: 'Main Building Complex',
          count: 1,
          metrics: {
            Doors: 156,
            ca: 153000,
            sa: 195600,
            bua: 258000,
            BalconyArea: 600,
          },
          substructures: [
            {
              label: 'Residential Tower GOT',
              count: 1,
              metrics: {
                Doors: 26,
                ca: 25500,
                sa: 32600,
                bua: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    ca: 1500,
                    sa: 2000,
                    bua: 4000,
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
                    ca: 500,
                    sa: 600,
                    bua: 1000,
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
                    ca: 11000,
                    sa: 14000,
                    bua: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        ca: 1000,
                        sa: 1500,
                        bua: 2000,
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
                        ca: 2000,
                        sa: 2500,
                        bua: 3000,
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
                        ca: 3000,
                        sa: 3500,
                        bua: 4000,
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
                ca: 25500,
                sa: 32600,
                bua: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    ca: 1500,
                    sa: 2000,
                    bua: 4000,
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
                    ca: 500,
                    sa: 600,
                    bua: 1000,
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
                    ca: 11000,
                    sa: 14000,
                    bua: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        ca: 1000,
                        sa: 1500,
                        bua: 2000,
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
                        ca: 2000,
                        sa: 2500,
                        bua: 3000,
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
                        ca: 3000,
                        sa: 3500,
                        bua: 4000,
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
                ca: 25500,
                sa: 32600,
                bua: 43000,
                BalconyArea: 100,
              },
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: {
                    Doors: 4,
                    ca: 1500,
                    sa: 2000,
                    bua: 4000,
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
                    ca: 500,
                    sa: 600,
                    bua: 1000,
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
                    ca: 11000,
                    sa: 14000,
                    bua: 17000,
                    BalconyArea: 50,
                  },
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: {
                        Doors: 1,
                        ca: 1000,
                        sa: 1500,
                        bua: 2000,
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
                        ca: 2000,
                        sa: 2500,
                        bua: 3000,
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
                        ca: 3000,
                        sa: 3500,
                        bua: 4000,
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
    if (true) {
      this.structure.metricItems.forEach((e) => {
        let x = {
          label: e.label,
          value: 0,
          id: nanoid(),
        };
        objList.push(x);
      });
    } else {
      for (let key in metric) {
        let x = {
          label: key,
          value: metric[key],
          id: nanoid(),
        };
        objList.push(x);
      }
    }
    return objList;
  }
}
