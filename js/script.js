var myApp = angular.module("myModule", []);

myApp.controller('myController', ['$scope', function($scope){
	var vechiles = [
		{
			name:"Car", 
			properties: [
				{name: "Maruti"},
				{name: "Ritz"},
				{name: "Toyota"},
				{name: "Audi"},
				{name: "BMW"}
			]
		},
		{
			name: "Bike",
			properties: [
				{name: "Splender"},
				{name: "CBZ"},
				{name: "Apache"},
				{name: "FZ"},
				{name: "Bullet"},

			]
		}

	];

	$scope.vechiles = vechiles;

}])