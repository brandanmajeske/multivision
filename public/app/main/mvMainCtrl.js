angular.module('app').controller('mvMainCtrl', function($scope){
	$scope.courses = [
		{name: 'C# for Sociopaths', featured: true, published: new Date('1/2/2014')},
		{name: 'C# for Non-Sociopaths', featured: true, published: new Date('1/2/2014')},
		{name: 'Super Duper Expert C#', featured: false, published: new Date('1/2/2014')},
		{name: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('1/2/2014')},
		{name: 'Pedantic C++', featured: true, published: new Date('1/2/2014')},
		{name: 'JavaScript for People over 20', featured: true, published: new Date('1/2/2014')},
		{name: 'Maintainable Code for Cowards', featured: false, published: new Date('1/2/2014')},
		{name: 'How to Keep Your Soul and Go Into Management', featured: true, published: new Date('1/2/2014')},
		{name: 'Writing Code that Doesn\'t Suck', featured: true, published: new Date('1/2/2014')},
		{name: 'Code Reviews for Jerks', featured: true, published: new Date('1/2/2014')},
		{name: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('1/2/2014')}

	]
});