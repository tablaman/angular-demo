// Values
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
// })