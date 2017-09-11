angular.module('app', [])
  .component('angularExample', {
    template: `
    <label>
      X =
      <input type="number" ng-model="$ctrl.x" style="font-size: 1em;">
    </label>
    <div>
      2 * X = {{ $ctrl.doubleX() }} ({{ $ctrl.doubleXCalled }})
    </div>
    <br>
    <label>
      Y =
      <input type="number" ng-model="$ctrl.y" style="font-size: 1em;">
    </label>
    <div>
      3 * Y = {{ $ctrl.tripleY() }}({{ $ctrl.tripleYCalled }})
    </div>
    `,
    controller: function () {
      var $ctrl = this;

      $ctrl.x = 1;
      $ctrl.y = 1;

      $ctrl.doubleXCalled = 0;
      $ctrl.tripleYCalled = 0;

      $ctrl.doubleX = function () {
        console.log('Angular: Computing the double of X')
        // Avoid infdig
        setTimeout(function () {
          $ctrl.doubleXCalled++;
        });
        return 2 * $ctrl.x;
      }

      $ctrl.tripleY = function () {
        console.log('Angular: Computing the triple of Y')
        // Avoid infdig
        setTimeout(function () {
          $ctrl.tripleYCalled++;
        });
        return 3 * $ctrl.y;
      }
    }
  });
