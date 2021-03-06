productApp.controller('aboutUsCtrl', function ($scope, restProxyService, $routeParams, API_URL_ROOT) {
    $scope.init = function () {
        $scope.type = 'about_us';

        $scope.params = {
            type: $scope.type
        };

        $scope.myPromise = restProxyService.sendHttpGet(API_URL_ROOT, '/index/richText/list/', $scope.params)
            .success(function (response) {
                if (response.errCode === 0) {
                    $scope.data  = response.data;

                    if ($scope.data !== null || $scope.data instanceof  Array || $scope.data.length > 0) {
                        $scope.data = $scope.data[0];
                    }
                }
            });
    };

    $scope.init();
});