(function() {
	/**
	 * Bootstrap responsive design directives. Use a combination of container, row and block elements to get a responsive layout.
	 *
	 * Documentation for grids at http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem
	 *
	 * @author Darlan Alves <darlan@moovia.com>
	 * @license http://license.visualidiot.com
	 */
	angular.module('ngResponsive', [])

	/**
	 * @element container
	 * @example <container fluid></container>
	 * @example <div container fluid></div>
	 */
	.directive('container', function() {
		return {
			restrict: 'EA',
			scope: false,
			replace: true,
			transclude: true,
			template: '<div ng-transclude></div>',
			link: function(scope, element, attributes) {
				var className = 'container';

				if (typeof attributes.fluid !== 'undefined') {
					className += '-fluid';
				}

				element.addClass(className);
			}
		};
	})

	/**
	 * @element row
	 * @example <row fluid></row>
	 * @example <div row fluid></div>
	 */
	.directive('row', function() {
		return {
			restrict: 'EA',
			scope: false,
			replace: true,
			transclude: true,
			template: '<div ng-transclude></div>',
			link: function(scope, element, attributes) {
				var className = 'row';

				if (typeof attributes.fluid !== 'undefined') {
					className += '-fluid';
				}

				element.addClass(className);
			}
		};
	})

	/**
	 * @element block
	 * @example <block size="4" offset="2"></block>
	 * @example <div block size="4" offset="2"></div>
	 */
	.directive('block', function() {
		return {
			restrict: 'EA',
			scope: false,
			replace: true,
			transclude: true,
			template: '<span ng-transclude></span>',
			link: function(scope, element, attributes) {
				element.addClass('span' + (attributes.size || '12'));

				if (attributes.offset) {
					element.addClass('offset' + attributes.offset);
				}
			}
		};
	});

}.call(this));