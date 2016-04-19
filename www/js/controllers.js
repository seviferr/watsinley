angular.module('starter.controllers', [])

.controller('mainCtrl', function($scope, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.message="";

  $scope.audiolapapela =     new Audio('sound/lapapela.mp3');


  $scope.mainCharacter = {
    name: "Rebeca",
    action: "still",
    imgSrc: "still.png",

    speak : function(msg){

    $scope.message = msg;


    },

    dance: function(){

      $scope.mainCharacter.action = "dance";
      $scope.mainCharacter.imgSrc = "dance.gif";

      $scope.audiolapapela.pause();
      $scope.audiolapapela.currentTime = 0;
      $scope.audiolapapela.play();



      console.log($scope.mainCharacter);

    },

    mace: function(){

      $scope.mainCharacter.action = "mace",
      $scope.mainCharacter.imgSrc = "mace.gif",

      console.log($scope.mainCharacter);

    },

    anger: function(){

      $scope.mainCharacter.action = "anger",
      $scope.mainCharacter.imgSrc = "anger.gif",

      console.log($scope.mainCharacter);

    },

    status: function(){

      $scope.mainCharacter.action = "status",
      $scope.mainCharacter.imgSrc = "status.gif",

      console.log($scope.mainCharacter);

      $timeout(function(){
        $scope.mainCharacter.speak("Hasemo' ethatú?");
      }, 2000);

      $timeout(function(){
        $scope.message = "";
      }, 4000)



    },

    play: function(){

      $scope.mainCharacter.action = "play",
      $scope.mainCharacter.imgSrc = "play.gif",

      console.log($scope.mainCharacter);

    }



  }

  console.log($scope.mainCharacter);

  $scope.papeles = function(){

    $scope.speak("Los papeles");

  };



  $scope.speak = function (msg){
    $scope.message = msg;
    $timeout(function(){
        $scope.message = "";

    }, 3000);


  };





})
