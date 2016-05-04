angular.module( 'starter.controllers', [] )

.controller( 'home', function( $scope, $config ) {
  $scope.config = $config;
  $scope.postName = 'front-page';
})

.controller( 'location', function( $scope, $config ) {
  $scope.config = $config;
} )

.controller( 'timeline', function( $scope, $config ) {
  $scope.config = $config;
} )

.controller( 'timeline', function( $scope, $config ) {
  $scope.config = $config;
} )

.controller( 'single', function( $scope, $stateParams, $config ) {
  $scope.config = $config;
  $scope.postId = $stateParams.id;
})

.controller( 'page', function( $scope, $stateParams, $config ) {
  $scope.config = $config;
  $scope.postName = $stateParams.name;
})
;
