class MyController {
  constructor() {
    const vm = this;

    vm.hello = 'world';
  }
}

angular
  .module('app', [])
  .controller('MyController', MyController);
