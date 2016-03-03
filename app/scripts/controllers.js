(function() {
  'use strict';

  function PostListController (Post) {
    this.posts = Post.query();
  }

  function PostCreateController (Post) {
    var self = this;

    this.create = function() {
      Post.save(self.post);
    };
  }

  function PostDetailController ( $routeParams, Post, User, Comment ) {
    this.post = {};
    this.comments = {};
    this.user = {};

    var self = this;

    Post.query({ id: $routeParams.postId })
      .$promise.then(
          // Success
        function (data) {
          self.post = data[0];

          self.user = User.query({ id: self.post.userId });
        },
        // Error
        function (error) {
          console.log(error);
        }
      );

    this.comments = Comment.query({ postId: $routeParams.postId });

  }

  angular
    .module('blog.controllers', ['blog.services'])
    .controller('PostListController', PostListController)
    .controller('PostCreateController', PostCreateController)
    .controller('PostDetailController', PostDetailController);

})();
