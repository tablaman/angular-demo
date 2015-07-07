module.exports = function(ngModule) {
	ngModule.directive ('kcdHello', function() {
		require('./main.less');
		return {
			restrict: 'E',
			scope: {},
			template: require('./kcd-hello.html'),
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				vm.greeting = 'hello world webpack rocks';

			}

		}
	})
}