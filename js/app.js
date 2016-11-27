angular.module('myApp', [])
    .controller('MyAppCntrl', function($scope) {
        $scope.playYouSound = function() {
            var audio = new Audio('sounds/You.m4a');
            audio.play();
        };
        $scope.playCanSound = function() {
            var audio = new Audio('sounds/Can.m4a');
            audio.play();
        };
        $scope.playDoSound = function() {
            var audio = new Audio('sounds/Do.m4a');
            audio.play();
        };
        $scope.playItSound = function() {
            var audio = new Audio('sounds/It.m4a');
            audio.play();
        };
        $scope.playAll = function() {
        	var audio = new Audio('sounds/You-Can.m4a');
        	audio.play();
        };
    });
