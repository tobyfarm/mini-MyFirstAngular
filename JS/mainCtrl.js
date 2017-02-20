angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Selena', 'Justin', 'Kayne']

  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriend);
  }
})
