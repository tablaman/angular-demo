// CustomersController.js
// Author: Mili Wijeratne

// The alternate way of doing it - i.e. controller as someOtherController
function customersCtrl () {
    // Defaults
    this.sortBy = 'name';
    this.reverse = false;

	this.customers = [{
        joined: '2012-12-1',
        name: 'mark',
        city: 'Kansas',
        orderTotal: 29.111
    }, {
        joined: '2012-12-1',
        name: 'Mika',
        city: 'Colombo',
        orderTotal: 90.777888999
    }, {
        joined: '2012-12-1',
        name: 'Brittany',
        city: 'Hawthorn',
        orderTotal: 9.9934
    }, {
        joined: '2012-12-1',
        name: 'Shelly',
        city: 'Kandy',
        orderTotal: 7.88777
    }, {
        joined: '2012-12-1',
        name: 'Druf',
        city: 'Kansas',
        orderTotal: 19.9934
    }];

    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };
}