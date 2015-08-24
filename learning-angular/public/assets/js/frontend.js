// Angular learning

/*********
Key players
Module
Routes

UI
    View
    Directives
    Filters

Logic/Data
    Controller - gets data into UI using $scope
    Factory
    Service

$scope is the glue between UI and Controller/Factory

Modules are just containers: 'tuppaware'
you cna have
- controllers, routes, factories/services/directives/filters

DATA: Factories and Services - SINGLETONS
- used to make RESTful calls
- used to share data between controllers
- used to handle custom logic
- Are singletons
- reusable anywhere

* Modules are containers whereas factories/services are the lego pieces that fit inside.

Controllers: the brain for a view
Directives: teach HTML new tricks!
- little lego blocks put together to do stuff
    - DOM manipulation
    - CSS etc et

    e.g.
    - ng-hide, ng-show
    - ng-repeat
    - ng-view
    - ng-show

    Data binding
    - ng-bind
    - ng-init
    - ng-model

    Modules/Controllers
    ng-app
    ng-controller

    Events
    ng-click
    ng-keypress
    ng-mouseenter

    You can add data- attributes in front of ng-hide - so you have data-ng-hide

    Can also use custom tags: e.g. <customFunc-ng></customFunc-ng>

    Angular uses a data-driven approach instead of controller-driven.

    Other directives
    ng-cloak
    ng-switch
    ng-class
    ng-show

MVC + MVVM = MV*

ng-init: use for rapid prototyping and putting in some data there


FACTORIES AND SERVICES - Singletons: the usage:
- Ajax calls - $http
- business rules
- calculations
- share data (code or state) between controllers
- you can put in constants and value

Method:
- singleton for starters
- can be injected into controllers or other factories.
- can hae their own dependencies.

Other types (other than factory / service):
- Constant
- Value
- Provier (outside of scope of the course)

MAIN DIFFERENCE BETWEEN FACTORY AND SERVICE
- Factory returns a custom object whereas the service IS the service - requires 'this'

Exmaples: - these are some of the main ones
$timeout $window, $location, $q - asynch processors
$rootScope, $interval, $filter - for custom filters
$log - general logging purposes.

*******************************************************
ng-animate

*******************************************************
Common directives
ngClass - Add and remove
ngHide/ngShow -  Add and remove
ngInclude -  Enter and leave
ngRepeat -  Enter, leave, move
ngSwitch -  Enter and leave
ngView -  Enter and leave

Custom Directives
$animate service

*******************************************************
Custom directives
- teach HTML new tricks
*******************************************************
use cases: maps, calendar component etc etc.

CATEGORIES:
DOM-Driven - all about DOM manipulation
Data-Driven - All about data, using other directives and a controller
Behaviour-Driven - all about handling DOM Events

TYPES: 4 different way to define on a page
Attribute directives: <span my-dir="exp"> </span>

Element based: <my-dir></my-dir>

** the 2 above are the most common

The following are less frequent:
CSS Class directives: <span class="my-dir: exp;"></span>

Comment directives
<!-- directive: my-dir exp -->


*******************************************************/

// Option 1 - define in global scope 
// var app = angular.module ('customersApp', []);

// Option 2 - wrap everything in anonymous functions - keep away from global context.
(function() {

    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);

    // directive

    app.directive('isolatedScopeWithString', function() {
        // DDO - A Directive Definition Object
        return {
            scope: {
                name: '@'
            },
            template: 'Hello World name: {{name}}'
        };
    });

    app.directive('isolatedScope', function() {

        return {
            scope: {
                datasource: '='


            },
            templateUrl: './assets/templates/isoloatedScope.html'
        };
    })

    app.directive('isolatedScopeWithEvents', function() {

        return {
            scope: {
                datasource: '=',
                action: '&'


            },
            templateUrl: './assets/templates/isoloatedScopeWithEvents.html'
        };
    })

    

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'assets/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'assets/views/orders.html'
            })
            .when('/orders', {
                controller: 'AllOrdersController',
                templateUrl: 'assets/views/allorders.html'
            })
            .when('/forms', {
                controller: 'FormsController',
                templateUrl: 'assets/views/forms.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    // app.run(function(formlyConfig) {
    //     formlyConfig.setType({
    //         name: 'input',
    //         template: 'hello world'
    //     })
    // })

}());

//teseting 'this' in GEC
var sth = function() {
    console.log('hello');
}

function sth2() {
    console.log('hello world');
    console.log(this);
    this.sth();
}

// this.sth2();
;// Values
// These will not be available in config
angular.module('customersApp').value('appSettings', {
	title: 'Customers Application',
	version: '1.9'
});

// Constants
// These CAN be injected into config
// angular.module('customersApp').value('appSettings', {
// 	title: 'Customers Application',
// 	version: '1.9'
// });// CustomersController.js
// Author: Mili Wijeratne

// Option 1
// app.controller('CustomersController', function($scope) {
//     // Defaults
//     $scope.sortBy = 'name';
//     $scope.reverse = false;

//     $scope.customers = [{
//         joined: '2012-12-1',
//         name: 'mark',
//         city: 'Kansas',
//         orderTotal: 29.111
//     }, {
//         joined: '2012-12-1',
//         name: 'Mika',
//         city: 'Colombo',
//         orderTotal: 90.777888999
//     }, {
//         joined: '2012-12-1',
//         name: 'Brittany',
//         city: 'Hawthorn',
//         orderTotal: 9.9934
//     }, {
//         joined: '2012-12-1',
//         name: 'Shelly',
//         city: 'Kandy',
//         orderTotal: 7.88777
//     }, {
//         joined: '2012-12-1',
//         name: 'Druf',
//         city: 'Kansas',
//         orderTotal: 19.9934
//     }];

//     $scope.doSort = function(propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//     };
// });


// Option 2 - enclose in anonymous function
// (function() {
//     angular.module('customersApp')
//         .controller('CustomersController', function($scope) {
//             // Defaults
//             $scope.sortBy = 'name';
//             $scope.reverse = false;

//             $scope.customers = [{
//                 joined: '2012-12-1',
//                 name: 'mark',
//                 city: 'Kansas',
//                 orderTotal: 29.111
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Mika',
//                 city: 'Colombo',
//                 orderTotal: 90.777888999
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Brittany',
//                 city: 'Hawthorn',
//                 orderTotal: 9.9934
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Shelly',
//                 city: 'Kandy',
//                 orderTotal: 7.88777
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Druf',
//                 city: 'Kansas',
//                 orderTotal: 19.9934
//             }];

//             $scope.doSort = function(propName) {
//                 $scope.sortBy = propName;
//                 $scope.reverse = !$scope.reverse;
//             };
//         });
// }());


// Option 3 - PREFERRED
// take the controller nesting away from the angular def, and keep it separate - preffered
// Advantage: when working on bigger functions, it's easier to get things wrong if you're not careful
// therefore by keeping the funciton separate, you get to purely focus on it.

(function() {

    var CustomersController = function($scope, $log, customersFactory, appSettings) {
        // Defaults
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {

            // log
            console.info('from customersController.js');
            // synchronous call
            // $scope.customers = customersFactory.getCustomers();

            //Async call with promise
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                    $log.log('Server Error! ' + data.error + ' ' + status);
                    // console.error('Server Error! ' + data.error + ' ' + status);

                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.addCustomer = function() {
            console.log('Ad Customer called');
        }

        // Delete customer
        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var j = 0; j < $scope.customers.length; j++) {
                            if ($scope.customers[j].id === customerId) {

                                $scope.customers.splice(j, 1);
                                break;
                            }
                        }
                    } else {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function(data, status, headers, config) {
                    // handle error
                    $log.log('Server Error! ' + data.error + ' ' + status);
                    // console.error('Server Error! ' + data.error + ' ' + status);

                });

        }

        // Change data for directive
        $scope.changeData  = function() {
            console.log('ok here we change data!');
        }

    }
    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
;// CustomersController.js
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
};(function() {

    var OrdersController = function($scope, $routeParams, customersFactory) {

        // best practice - define all vars
        var customerId = $routeParams.customerId; // comes from angular module where we've deifned customerId. ie .when('/orders/:customerId')
        $scope.orders = null;
        $scope.customer = null;

        // log
        // console.info('OrdersController loaded');

        // private internal function for searching
        function init () {
            // Search the customers for the customerId and obtain the order(s) relevant to that id
            // $scope.customer = customersFactory.getCustomer(customerId);

            console.info('init ordersController.js');

            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    }
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());
;(function() {

    var AllOrdersController = function($scope, customersFactory) {

        // best practice - define all vars
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        // private internal function for searching
        function init () {


            customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        function getOrdersTotal() {
            var total = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                total += $scope.orders[i].total;

            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    }
    AllOrdersController.$inject = ['$scope', 'customersFactory'];
    angular.module('customersApp')
        .controller('AllOrdersController', AllOrdersController);
}());
;// FormsController

(function() {

    var FormsController = function($scope) {
        // Defaults
        $scope.sortBy = 'name';

        $scope.model = {};
        $scope.fields = {};



        function init() {

            // log
            console.info('from FormsController.js');
            // synchronous call
            // $scope.customers = customersFactory.getCustomers();
            $scope.model = {
                firstName: 'Obe Wan'
            }
            $scope.fields = [{
                type: 'input',
                key: 'firstName',
                templateOptions: {
                    label: 'First Name'
                },
                validators: {
                    notBob: '$viewValue !== "bob"'
                }
            }, {
                template: '<hr />'
            }, {
                type: 'select',
                key: 'something',
                templateOptions: {
                    label: 'select something'
                }
            }]

        }

        init();



    }
    FormsController.$inject = ['$scope'];
    angular.module('customersApp')
        .controller('FormsController', FormsController);
}());
;(function() {

    var customersFactory = function($http) {


        // define factory object literal
        var factory = {};

        factory.getCustomers = function() {
            return $http.get('http://localhost:8080/customers');
        };

        factory.getCustomer = function(customerId) {
            return $http.get('http://localhost:8080/customers/' + customerId);
        };

        factory.getOrders = function(customerId) {
            return $http.get('http://localhost:8080/orders/');
        };

        factory.deleteCustomer = function(customerId) {
            return $http.delete('/customers/' + customerId);
        }

        return factory;
    }

    customersFactory.$inject = ['$http'];
    angular.module('customersApp')
        .factory('customersFactory', customersFactory);

}());

















// for easy testing, include the following inside function.
        // var customers = [{
        //     id: 1,
        //     joined: '2012-12-1',
        //     name: 'mark',
        //     city: 'Kansas',
        //     orderTotal: 19.111,
        //     orders: [{
        //         id: 1,
        //         product: 'Shoes',
        //         total: 95.99556
        //     }, {
        //         id: 3,
        //         product: 'Aweosme kakki',
        //         total: 7.99556
        //     }]
        // }, {
        //     id: 2,
        //     joined: '2012-12-1',
        //     name: 'John',
        //     city: 'Kansas',
        //     orderTotal: 11.111,
        //     orders: [{
        //         id: 3,
        //         product: 'Boots',
        //         total: 8.99556
        //     }]
        // }, {
        //     id: 3,
        //     joined: '2012-12-1',
        //     name: 'Shuushaaann',
        //     city: 'Kansas',
        //     orderTotal: 29.111,
        //     orders: [{
        //         id: 12,
        //         product: 'Shoes23',
        //         total: 5.99556
        //     }]
        // }, {
        //     id: 4,
        //     joined: '2012-12-1',
        //     name: 'Bronty',
        //     city: 'Kansas',
        //     orderTotal: 59.99911,
        //     orders: [{
        //         id: 2,
        //         product: 'Shoes211',
        //         total: 6.99556
        //     }, {
        //         id: 3,
        //         product: 'toy train kakki',
        //         total: 7.99556
        //     }]
        // }];


        // factory.getCustomers = function() {
        //     return customers;
        // };

        // factory.getCustomer = function(customerId) {
        //     for (var i = 0; i < customers.length; i++) {
        //         if (customers[i].id === parseInt(customerId)) {
        //             return customers[i];

        //         }
        //     }
        //     return {};
        // }

        // return factory;
;(function() {

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
;(function() {
    // Note: this is only temporary to show how it can be written

    var tableHelper = function() {
        var template = '<div class="tableHelper"></div>',
            link = function(scope, element, attrs, ngModel) {
                var headerCols = [],
                    tableStart = '<table>',
                    tableEnd = '</table>',
                    table = '',
                    visibleProps = [],
                    datasource,
                    sortCol = null,
                    sortDir = 1,
                    anotherMapValtoObj = null;


                // converting a string val to object literals - use $eval or $parse
                // with $parse, it returns a function, so you need to invoke it to execute.
                anotherMapValtoObj = scope.$eval(attrs.newmap);
                console.log(attrs.newmap);
                console.log('------ converted -----');
                console.log(anotherMapValtoObj);
                console.log(anotherMapValtoObj[0].firstName);


                // Watch for ngModel to change. Required since the $modelValue
                // will be NaN initially

                // METHOD 1 - least preferred
                // attrs.$observe ('ngModel', function(value) {
                //     scope.$watch('value', function (newValue) {
                //         render();
                //     });
                // });
                
                // METHOD 2 
                // scope.$watch(attrs.ngModel, render);

                // METHOD 3 - use $modelValue change
                // scope.$watch (function () {
                //     return ngModel.$modelValue
                // }, function (newValue) {
                //     render();
                // });

                // METHOD 4 - BEST
                // i.e. when the internals of the ngModel have changed, take action!
                ngModel.$render = function () {
                    render();
                };


                // scope.$watchCollection('datasource', render);
                wireEvents();


                function render() {
                    if (ngModel && ngModel.$modelValue.length) {
                        datasource = ngModel.$modelValue;
                        table += tableStart;
                        table += renderHeader();
                        table += renderRows() + tableEnd;
                        renderTable();

                    }

                }

                function wireEvents() {

                    console.info('tableHelper.js');

                    element.on('click', function(event) {
                        if (event.srcElement.nodeName === 'TH') {
                            var val = event.srcElement.innerHTML;
                            var col = (scope.columnmap) ? getRawColumnName(val) : val;
                            if (col) sort(col);
                        }
                    });
                }

                function sort(col) {
                    //See if they clicked on the same header
                    //If they did then reverse the sort
                    if (sortCol === col) sortDir = sortDir * -1;
                    sortCol = col;
                    datasource.sort(function(a, b) {
                        if (a[col] > b[col]) return 1 * sortDir;
                        if (a[col] < b[col]) return -1 * sortDir;
                        return 0;
                    });
                    render();
                }

                function renderHeader() {
                    var tr = '<tr>';
                    for (var prop in datasource[0]) {
                        var val = getColumnName(prop);
                        if (val) {
                            //Track visible properties to make it fast to check them later
                            visibleProps.push(prop);
                            tr += '<th>' + val + '</th>';
                        }
                    }
                    tr += '</tr>';
                    tr = '<thead>' + tr + '</thead>';
                    return tr;
                }

                function renderRows() {
                    var rows = '';
                    for (var i = 0, len = datasource.length; i < len; i++) {
                        rows += '<tr>';
                        var row = datasource[i];
                        for (var prop in row) {
                            if (visibleProps.indexOf(prop) > -1) {
                                rows += '<td>' + row[prop] + '</td>';
                            }
                        }
                        rows += '</tr>';
                    }
                    rows = '<tbody>' + rows + '</tbody>';
                    return rows;
                }

                function renderTable() {
                    table += '<br /><div class="rowCount">' + datasource.length + ' rows</div>';
                    element.html(table);
                    table = '';
                }

                function getRawColumnName(friendlyCol) {
                    var rawCol;
                    scope.columnmap.forEach(function(colMap) {
                        for (var prop in colMap) {
                            if (colMap[prop] === friendlyCol) {
                                rawCol = prop;
                                break;
                            }
                        }
                        return null;
                    });
                    return rawCol;
                }

                function filterColumnMap(prop) {
                    var val = scope.columnmap.filter(function(map) {
                        if (map[prop]) {
                            return true;
                        }
                        return false;
                    });
                    return val;
                }

                function getColumnName(prop) {
                    if (!scope.columnmap) return prop;
                    var val = filterColumnMap(prop);
                    if (val && val.length && !val[0].hidden) return val[0][prop];
                    else return null;
                }

            };

            return {
                    restrict: 'E',
                    require: 'ngModel',
                    scope: {

                        columnmap: '=',
                        newmap: '='
                        // evolution: 'datasource' property no longer required as we're now using ngModel.
                        // datasource: '='      

                    },
                    template: template,
                    link: link
                }


    }


    angular.module('customersApp')
        .directive('tableHelper', tableHelper);

}());


// app.directive('linkDemo', function() {

//         var linkDemo = function () {
//             return {
//                 restrict: 'A',
//                 link: function(scope, elem, attrs) {
//                     // Using JQLite in our directives
//                     elem.on('click', function () {
//                         elem.html("hello there");
//                     });
//                     elem.on('mouseenter', function () {
//                         elem.css('background-color', '#333');
//                     });
//                     elem.on('mouseleave', function () {
//                         elem.css('background-color', '#fefefe');
//                     });


//                 };

//             };
//         });

//         return {
//             scope: {
//                 datasource: '=',
//                 action: '&'


//             },
//             templateUrl: './assets/templates/isoloatedScopeWithEvents.html'
//         };
//     })
;// Map Geolocation


(function() {

	var mapGeoLocation = ['$window', function($window) {

		var template = '<p><span id="status">looking up geolocation... </span></p>' +
						'<br><div id="map"></div>',
			mapContainer = null,
			status = null;


		var link = function (scope, elem, attrs) {
			status = angular.element(document.getElementById('status'));
			mapContainer = angular.element(document.getElementById('map'));

			mapContainer.attr(	'style', 'height:' + scope.height + 
								'px;width:' + scope.width + 'px');
			// use the HTML5 geolocation
			$window.navigator.geolocation.getCurrentPosition(mapLocation, geoError);
		}

		function mapLocation(pos) {
              status.html('Found your location! Longitude: ' + pos.coords.longitude +
                          ' Latitude: ' + pos.coords.latitude);

              var latlng = new google.maps.LatLng(pos.coords.latitude,
                                                  pos.coords.longitude);
              var options = {
                zoom: 15,
                center: latlng,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              // requrest [0] to get the raw DOM element in jqLite or jQuery.
              var map = new google.maps.Map(mapContainer[0], options);

              var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title:"Your location"
              });
        }

        function geoError(error) {
           status.html('failed lookup ' + error.message);
        }


		return {
			restrict: 'EA',

			scope: {
				height: '@',
				width: '@'

			},
			link: link,
			template: template

		}

	}];

	angular.module('customersApp')
        .directive('mapGeoLocation', mapGeoLocation);


}());;// Map Geolocation


(function() {

    var directiveWithController = function() {

        var controller = ['$scope', function($scope) {

            init();

            function init() {
                $scope.items = angular.copy($scope.datasource);
                console.log($scope.datasource);
            }

            $scope.addItem = function() {
                var name = 'New Directive Controller Item';
                $scope.add()(name);
                $scope.items.push({
                    name: name
                });
            }

        }];




        return {
            restrict: 'EA',

            scope: {
                datasource: '=',
                add: '&'


            },
            controller: controller,
            // if using controllerAs, need the next line also define vm = this in controller.
            // controllerAs: 'vm',
            // bindToController: true,
            templateUrl: './assets/templates/directiveWithController.html'
        };

    };



    // directiveWithController.$inject = ['$scope', 'directiveWithController'];
    angular.module('customersApp')
        .directive('directiveWithController', directiveWithController);


}());
;// Map Geolocation


(function() {

    var directiveWithControllerAs = function() {

        var controller = function() {

            var vm = this;

            init();

            function init() {
                vm.items = angular.copy(vm.datasource);
                console.log(vm.datasource);
            }

            vm.addItem = function() {
                var name = 'New Directive Controller Item';
                vm.add()(name);
                vm.items.push({
                    name: name
                });
            }

        };




        return {
            restrict: 'EA',

            scope: {
                datasource: '=',
                add: '&'


            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: './assets/templates/directiveWithControllerAs.html'
        };

    };



    angular.module('customersApp')
        .directive('directiveWithControllerAs', directiveWithControllerAs);


}());
