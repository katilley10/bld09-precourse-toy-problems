const ts = require('./totalSales');

const secondTeam = {
    name: 'Tom',
    individualSales: 30,
    manages: [{
        name: 'Bob',
        individualSales: 25,
        manages: [{
            name: 'Tim',
            individualSales: 35,
            manages: [{
                name: 'Suzzy',
                individualSales: 20,
                manages: [{
                    name: 'Rachel',
                    individualSales: 60,
                    manages: [{
                        name: 'The Weeknd',
                        individualSales: 10,
                        manages: []
                    }]
                }]
            }]
        },
        {
            name: 'Joe',
            individualSales: 10,
            manages: []
        },
        {
            name: 'Fred',
            individualSales: 5,
            manages: []
        }
        ]
    },
    {
        name: 'Debbie',
        individualSales: 50,
        manages: [{
            name: 'Jae',
            individualSales: 20,
            manages: [{
                name: 'Austin',
                individualSales: 15,
                manages: []
            }]
        }]
    }
    ]
};

test('It should return return the total sales from a sales team', () => {
    expect(ts.totalSales(ts.salesTeam)).toBe(190);
    expect(ts.totalSales(secondTeam)).toBe(280);
    expect(ts.totalSales({ name: 'Bailey', individualSales: 700, manages: [] })).toBe(700);
});
