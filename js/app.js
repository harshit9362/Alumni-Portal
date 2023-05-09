
'use strict';

angular.module('example366', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {


    $scope.photos = [
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gMzD30_gv3Hmej5O52KYXkoohtewRQPHecrRO0oNG14QuS8YWXG5FFspplzmYc5ljPDgdPMFiPyyWmYk_3MOTKJubFIgg=w1920-h902', desc: 'Image 01'},
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gM_z8GmT7eRItx4dFxRAN2LYcD31iNioc7nz6sC4NU-DBptJRbDS90_bphxla6NGY8OP2ykNk1jwUsYRSL7QK1hhyD0QQ=w1920-h902', desc: 'Image 02'},
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gNavn9cQL6yUEyAmI-uDn3bsweqI0sfKkl9GcPnyNMOmU7Wvycf-ACaw67dmUodzJG7CF1Uz05g-xhsmnXJKz0VJLfWnA=w1920-h902', desc: 'Image 03'},
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gPkBU_5LMW4pi-upFyRuYSJkDGqozovcNROj9RbYQCcJtF9G_1iKSumlXIFRnWsSqVe_Go46IOhWUJL-8b08MkZQaFulg=w1920-h902', desc: 'Image 04'},
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gNn_I2AyJbs421mcBgPkTcLv-1wFwd5E90AKedKkSaSU4BTlWccvGCOyyKWdU7KHe9mVILca1jClatXSdpVFbK7BPfifA=w1920-h902', desc: 'Image 05'},
        {src: 'https://lh3.googleusercontent.com/drive-viewer/AFDK6gNLziKAqY36ZUdDj7Z8j49EgmRtOeL7YDaxHCRX7QgOC2PSNTHN_EUEF2N9tEC3V6FkroYbiL8QKK_HUqjdeVSe4BKqXQ=w1920-h902', desc: 'Image 06'}
    ];


    $scope._Index = 0;


    $scope.isActive = function (index) {
        return $scope._Index === index;
    };


    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };


    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };


    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});

