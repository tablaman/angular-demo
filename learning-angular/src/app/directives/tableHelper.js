(function() {
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
