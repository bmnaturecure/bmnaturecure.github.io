// Controller for gallery

var app = angular.module('bmn', []);
app.controller('galleryCtrl', function($scope) {
    // TEMP Gallery code
    $scope.photos = [
        {
            'image' : 'img/portfolio/1.jpg',
            'title' : 'Title 1',
            'description' : 'Description 1'
        },
        {
            'image' : 'img/portfolio/2.jpg',
            'title' : 'Title 2',
            'description' : 'Description 2'
        },
        {
            'image' : 'img/portfolio/3.jpg',
            'title' : 'Title 3',
            'description' : 'Description 3'
        },
        {
            'image' : 'img/portfolio/4.jpg',
            'title' : 'Title 4',
            'description' : 'Description 4'
        },
        {
            'image' : 'img/portfolio/5.jpg',
            'title' : 'Title 5',
            'description' : 'Description 5'
        },
        {
            'image' : 'img/portfolio/6.jpg',
            'title' : 'Title 6',
            'description' : 'Description 6'
        }
    ]
});