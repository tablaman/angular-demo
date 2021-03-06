(function() {

    var customersService = function() {

        var customers = [{
            id: 1,
            joined: '2012-12-1',
            name: 'mark',
            city: 'Kansas',
            orderTotal: 19.111,
            orders: [{
                id: 1,
                product: 'Shoes',
                total: 95.99556
            }, {
                id: 3,
                product: 'Aweosme kakki',
                total: 7.99556
            }]
        }, {
            id: 2,
            joined: '2012-12-1',
            name: 'John',
            city: 'Kansas',
            orderTotal: 11.111,
            orders: [{
                id: 3,
                product: 'Boots',
                total: 8.99556
            }]
        }, {
            id: 3,
            joined: '2012-12-1',
            name: 'Shuushaaann',
            city: 'Kansas',
            orderTotal: 29.111,
            orders: [{
                id: 12,
                product: 'Shoes23',
                total: 5.99556
            }]
        }, {
            id: 4,
            joined: '2012-12-1',
            name: 'Bronty',
            city: 'Kansas',
            orderTotal: 59.99911,
            orders: [{
                id: 2,
                product: 'Shoes211',
                total: 6.99556
            }, {
                id: 3,
                product: 'toy train kakki',
                total: 7.99556
            }]
        }];


        this.getCustomers = function() {
            return customers;
        };

        this.getCustomer = function(customerId) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];

                }
            }
            return {};
        }

    }

    angular.module('customersApp')
        .service('customersService', customersService);

}());
