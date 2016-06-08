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
  WP.Query( $config.apiRoot ).query( query ).$promise.then( function ( posts ) {
    var sorted_posts = _.sortBy(posts, function ( post ) {
      return post.post_meta[0]['value'];
    });
    var mapped_posts = _.map( sorted_posts, function ( post ) {
      post.post_meta[0]['value'] = new Date( post.post_meta[0]['value'] * 1000 ).toUTCString();
      return post;
    });
    $scope.posts = mapped_posts;
    $scope.title = $config.title;
  });

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
    //var mapped_post = _.map( post, ( post ) => {
      post.content = post.content.replace( /Click to share on Twitter \(Opens in new window\)/g , '' ) ;
      post.content = post.content.replace( /Click to share on Facebook \(Opens in new window\)/g , '' ) ;
      post.content = post.content.replace( /Click to share on LinkedIn \(Opens in new window\)/g , '' ) ;
      post.content = post.content.replace( /Click to share on Google\+ \(Opens in new window\)/g , '' ) ;
      post.content = post.content.replace( /Click to share on Pocket \(Opens in new window\)/g , '' ) ;
      post.content = post.content.replace( /Share this:/g , '' ) ;
      //return post
    //});
    $scope.post = post;
  } );
})

.controller( 'session', function( $scope, $stateParams, $config, WP  ) {
  $scope.config = $config;
  var query = {
    endpoint: 'posts',
    type: "wcb_session",
    'filter[p]': $stateParams.id
  };
  WP.Query( $config.apiRoot ).query( query ).$promise.then( function ( posts ) {
    posts[0].content = posts[0].content.replace( /Click to share on Twitter \(Opens in new window\)/g , '' ) ;
    posts[0].content = posts[0].content.replace( /Click to share on Facebook \(Opens in new window\)/g , '' ) ;
    posts[0].content = posts[0].content.replace( /Click to share on LinkedIn \(Opens in new window\)/g , '' ) ;
    posts[0].content = posts[0].content.replace( /Click to share on Google\+ \(Opens in new window\)/g , '' ) ;
    posts[0].content = posts[0].content.replace( /Click to share on Pocket \(Opens in new window\)/g , '' ) ;
    posts[0].content = posts[0].content.replace( /Share this:/g , '' ) ;
    posts[0].post_meta[0]['value'] = new Date( posts[0].post_meta[0]['value'] * 1000 ).toUTCString();
    $scope.posts = posts;
    $scope.title = posts[0].title;
  });
})
;
