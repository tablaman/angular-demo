// Values
// These will not be available in config
angular.module('amnet.onlineSignup').value('appSettings', {
    title: 'Amnet Onlinesignup',
    version: '1.0',
    author: 'Mili Wijeratne',

    broadbandPlans: {
        footnote: '* Unlimited plans have no data limit but are subject to our <a href="#">Fair Use Policy</a>.',
        options: [{
            label: '100GB',
            price: 20,
            selected: true
        }, {
            label: '250GB',
            price: 60,
            selected: false
        }, {
            label: 'Unlimited*',
            price: 70,
            selected: false

        }]
    }

});

// Constants
// These CAN be injected into config
// angular.module('customersApp').value('appSettings', {
// 	title: 'Customers Application',
// 	version: '1.9'
// })
