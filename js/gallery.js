// Controller for gallery

var app = angular.module('bmn', []);
app.controller('galleryCtrl', function($scope, $http, $window) {
    
    // Constants
    var baseUrl = "https://api.flickr.com/services/rest/";
    var flickrApiKey = "a782fbcbe110b9c024f0c6003b447dfe";
    var flickrPhotosetId = "72157668865244715";
    var flickrUserId = "143475214@N04";
    var flickrMethod = "flickr.photosets.getphotos";
    
    // Variables
    $scope.photos = [];
    
    var photoUrl = baseUrl + "?method=" + flickrMethod + "&api_key=" + flickrApiKey + "&photoset_id=" + flickrPhotosetId + "&user_id=" + flickrUserId + "&extras=url_m,description&format=json&nojsoncallback=?"
    
    // Get photos
    $http.get(photoUrl).then(function successRes(response) {
        
        // Got data
        var photos = response.data.photoset.photo;
        for (var i=0; i<photos.length; i++) {
            $scope.photos.push({
                'image' : photos[i].url_m,
                'title' : photos[i].title,
                'description' : photos[i].description._content
            });
        }
        
    }, function errorRes(response) {
        // Error
        $window.alert(response.statusText);
    });
    
});