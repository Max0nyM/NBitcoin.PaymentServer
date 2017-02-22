﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location'];

    function HomeController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.message = '';

        activate();

        function activate() { }
    }
})();
