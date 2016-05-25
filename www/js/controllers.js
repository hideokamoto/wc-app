angular.module( 'starter.controllers', [] )

.controller( 'home', function( $scope, $config, WP ) {
  $scope.posts = [];
  var query = {
    endpoint: 'posts'
  };
  WP.Query( $config.apiRoot ).query( query ).$promise.then( function( posts ) {
    $scope.posts = posts;
		$scope.title = $config.title;
  } );
})

.controller( 'schedule', function( $scope, $config, WP ) {
  $scope.posts = [];
  var query = {
    endpoint: 'posts',
    type: "wcb_session",
    'filter[posts_per_page]': -1
  };
  WP.Query( $config.apiRoot ).query( query ).$promise.then( ( posts ) => {
    $scope.posts = posts;
    $scope.title = $config.title;
  })

} )

.controller( 'location', function( $scope, $config ) {

} )

.controller( 'timeline', function( $scope, $config ) {

} )

.controller( 'single', function( $scope, $stateParams, $config, WP ) {
  $scope.config = $config;
  var query = {
    endpoint: 'posts',
    id: $stateParams.id
  };
  WP.Query( $config.apiRoot ).get( query ).$promise.then( function( post ) {
    $scope.post = post;
  } );
})

.controller( 'page', function( $scope, $stateParams, $config ) {

})
;
