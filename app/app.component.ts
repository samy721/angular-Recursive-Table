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
      label: 'All',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      substructures: [
        {
          label: 'Main Building Complex',
          count: 1,
          metrics: [
            {
              label: 'BUA',
              unit: 'sqft',
              id: nanoid(),
              value: 4000,
            },
            {
              label: 'SA',
              unit: 'sqft',
              id: nanoid(),
              value: 3500,
            },
            {
              label: 'CA',
              unit: 'sqft',
              id: nanoid(),
              value: 3000,
            },
            {
              label: 'Doors',
              unit: 'Nos',
              id: nanoid(),
              value: 2,
            },
            {
              label: 'balconyArea',
              unit: 'sqft',
              id: nanoid(),
              value: 50,
            },
          ],
          substructures: [
            {
              label: 'Residential Tower GOT',
              count: 1,
              metrics: [
                {
                  label: 'BUA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 4000,
                },
                {
                  label: 'SA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3500,
                },
                {
                  label: 'CA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3000,
                },
                {
                  label: 'Doors',
                  unit: 'Nos',
                  id: nanoid(),
                  value: 2,
                },
                {
                  label: 'balconyArea',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 50,
                },
              ],
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
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
              metrics: [
                {
                  label: 'BUA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 4000,
                },
                {
                  label: 'SA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3500,
                },
                {
                  label: 'CA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3000,
                },
                {
                  label: 'Doors',
                  unit: 'Nos',
                  id: nanoid(),
                  value: 2,
                },
                {
                  label: 'balconyArea',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 50,
                },
              ],
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                  ],
                },
              ],
              id: nanoid(),
            },
            {
              label: 'Super Hero Tower',
              count: 3,
              metrics: [
                {
                  label: 'BUA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 4000,
                },
                {
                  label: 'SA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3500,
                },
                {
                  label: 'CA',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 3000,
                },
                {
                  label: 'Doors',
                  unit: 'Nos',
                  id: nanoid(),
                  value: 2,
                },
                {
                  label: 'balconyArea',
                  unit: 'sqft',
                  id: nanoid(),
                  value: 50,
                },
              ],
              substructures: [
                {
                  label: 'Stairs',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Elevators',
                  count: 1,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [],
                  id: nanoid(),
                },
                {
                  label: 'Floors',
                  count: 2,
                  metrics: [
                    {
                      label: 'BUA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 4000,
                    },
                    {
                      label: 'SA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3500,
                    },
                    {
                      label: 'CA',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 3000,
                    },
                    {
                      label: 'Doors',
                      unit: 'Nos',
                      id: nanoid(),
                      value: 2,
                    },
                    {
                      label: 'balconyArea',
                      unit: 'sqft',
                      id: nanoid(),
                      value: 50,
                    },
                  ],
                  substructures: [
                    {
                      label: '1BHK',
                      count: 3,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '2BHK',
                      count: 1,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
                      substructures: [],
                      id: nanoid(),
                    },
                    {
                      label: '3BHK',
                      count: 2,
                      metrics: [
                        {
                          label: 'BUA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 4000,
                        },
                        {
                          label: 'SA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3500,
                        },
                        {
                          label: 'CA',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 3000,
                        },
                        {
                          label: 'Doors',
                          unit: 'Nos',
                          id: nanoid(),
                          value: 2,
                        },
                        {
                          label: 'balconyArea',
                          unit: 'sqft',
                          id: nanoid(),
                          value: 50,
                        },
                      ],
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
        id: nanoid(),
        value: null,
      },
      {
        label: 'SA',
        unit: 'sqft',
        id: nanoid(),
        value: null,
      },
      {
        label: 'CA',
        unit: 'sqft',
        id: nanoid(),
        value: null,
      },
      {
        label: 'Doors',
        unit: 'Nos',
        id: nanoid(),
        value: null,
      },
      {
        label: 'BalconyArea',
        unit: 'sqft',
        id: nanoid(),
        value: null,
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

  flatStructure = [
    {
      level: 0,
      id: nanoid(),
      label: 'All',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 1,
      id: nanoid(),
      label: 'Main Building Complex',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 2,
      id: nanoid(),
      label: 'Residential Tower GOT',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Stairs',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Elevators',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Floors',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 4,
      id: nanoid(),
      label: '1 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '2 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '3 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 2,
      id: nanoid(),
      label: 'Iconic Tower',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Stairs',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Elevators',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Floors',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 4,
      id: nanoid(),
      label: '1 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '2 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '3 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 2,
      id: nanoid(),
      label: 'Super Hero Tower',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Stairs',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Elevators',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 3,
      id: nanoid(),
      label: 'Floors',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: false,
    },
    {
      level: 4,
      id: nanoid(),
      label: '1 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '2 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
    {
      level: 4,
      id: nanoid(),
      label: '3 BHK',
      count: 1,
      metrics: [
        {
          label: 'BUA',
          unit: 'sqft',
          id: nanoid(),
          value: 4000,
        },
        {
          label: 'SA',
          unit: 'sqft',
          id: nanoid(),
          value: 3500,
        },
        {
          label: 'CA',
          unit: 'sqft',
          id: nanoid(),
          value: 3000,
        },
        {
          label: 'Doors',
          unit: 'Nos',
          id: nanoid(),
          value: 2,
        },
        {
          label: 'balconyArea',
          unit: 'sqft',
          id: nanoid(),
          value: 50,
        },
      ],
      isLeaf: true,
    },
  ];
  dummyflatStructure = [];
  scrollPos(event) {
    var rightScrollPos =
      document.getElementById('table-scroll-tasks').scrollTop;

    document.getElementById('table-scroll-employees').scrollTop =
      rightScrollPos;
  }

  flatTree(obj, l) {
    let level = l;
    let x = {
      level: level,
      id: obj.id,
      label: obj.label,
      count: obj.count,
      metrics: [...obj.metrics],
      isLeaf: obj.substructures.length == 0 ? true : false,
    };
    this.dummyflatStructure.push(x);
    if (obj.substructures.length == 0) {
      return;
    } else {
      obj.substructures.forEach((e) => {
        this.flatTree(e, level + 1);
      });
    }
  }

  ngOnInit() {
    this.flatTree(this.structure.rootStructure, 0);
    console.log(this.dummyflatStructure);
  }
}
