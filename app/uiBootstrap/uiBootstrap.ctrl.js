(function() {
'use strict';

/* Controllers */
var tempApp=angular.module('app');

  // bootstrap controller
tempApp.controller('AccordionDemoCtrl', ['$scope', function($scope) {
      $scope.oneAtATime = true;

      $scope.groups = [
          {
              title: 'Dynamic Group Header - 1',
              content: 'Dynamic Group Body - 1'
          },
          {
              title: 'Dynamic Group Header - 2',
              content: 'Dynamic Group Body - 2'
          }
      ];

      $scope.items = ['Item 1', 'Item 2', 'Item 3'];

      $scope.addItem = function() {
          var newItemNo = $scope.items.length + 1;
          $scope.items.push('Item ' + newItemNo);
      };

      $scope.status = {
          isFirstOpen: true,
          isFirstDisabled: false
      };
  }])
  ;
tempApp.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ;
tempApp.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ;

tempApp.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push({
      image:'img/c' + slides.length + '.jpg',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});

tempApp.controller('DropdownCtrl', ['$scope', function($scope) {
      $scope.items = [
          'The first choice!',
          'And another choice for you.',
          'but wait! A third!'
      ];

      $scope.status = {
          isopen: false
      };

      $scope.toggled = function(open) {
          $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
  }])
  ;
tempApp.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', function($scope, $uibModalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
  }])
  ;
tempApp.controller('ModalDemoCtrl', ['$scope', '$uibModal', '$log', function($scope, $uibModal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  ;
tempApp.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ;
tempApp.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ;
tempApp.controller('ProgressDemoCtrl', function ($scope) {
      $scope.max = 200;

      $scope.random = function() {
          var value = Math.floor(Math.random() * 100 + 1);
          var type;

          if (value < 25) {
              type = 'success';
          } else if (value < 50) {
              type = 'info';
          } else if (value < 75) {
              type = 'warning';
          } else {
              type = 'danger';
          }

          $scope.showWarning = type === 'danger' || type === 'warning';

          $scope.dynamic = value;
          $scope.type = type;
      };

      $scope.random();

      $scope.randomStacked = function() {
          $scope.stacked = [];
          var types = ['success', 'info', 'warning', 'danger'];

          for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
              var index = Math.floor(Math.random() * 4);
              $scope.stacked.push({
                  value: Math.floor(Math.random() * 30 + 1),
                  type: types[index]
              });
          }
      };

      $scope.randomStacked();
  });

tempApp.controller('TabsDemoCtrlui', ['$scope', '$window', function($scope, $window) {
    $scope.tabs = [
      { title:'Dynamic Title 11', content:'Dynamic content 1' },
      { title:'Dynamic Title 22', content:'Dynamic content 2', disabled: true }
    ];
      $scope.alertMe = function() {
          setTimeout(function() {
              $window.alert('Haha. You\'ve selected the alert tab!');
          });
      };
  }])
  ;
tempApp.controller('RatingDemoCtrl', function ($scope) {
      $scope.rate = 7;
      $scope.max = 10;
      $scope.isReadonly = false;

      $scope.hoveringOver = function(value) {
          $scope.overStar = value;
          $scope.percent = 100 * (value / $scope.max);
      };

      $scope.ratingStates = [
          {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
          {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
          {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
          {stateOn: 'glyphicon-heart'},
          {stateOff: 'glyphicon-off'}
      ];
  });
tempApp.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ;
tempApp.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('data/menu.json').then(function(res){
        var tx = [];
        angular.forEach(res.data.menu, function(item){
          tx.push(item.text);
        });
          return tx;
      });
    };
  }])
  ;
tempApp.controller('DatepickerDemoCtrl', function ($scope) {
      $scope.today = function() {
          $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function() {
          $scope.dt = null;
      };

      $scope.inlineOptions = {
          customClass: getDayClass,
          minDate: new Date(),
          showWeeks: true
      };

      $scope.dateOptions = {
          dateDisabled: disabled,
          formatYear: 'yy',
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
      };

      // Disable weekend selection
      function disabled(data) {
          var date = data.date,
              mode = data.mode;
          return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      $scope.toggleMin = function() {
          $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
          $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      };

      $scope.toggleMin();

      $scope.open1 = function() {
          $scope.popup1.opened = true;
      };

      $scope.open2 = function() {
          $scope.popup2.opened = true;
      };

      $scope.setDate = function(year, month, day) {
          $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
          opened: false
      };

      $scope.popup2 = {
          opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date(tomorrow);
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      $scope.events = [
          {
              date: tomorrow,
              status: 'full'
          },
          {
              date: afterTomorrow,
              status: 'partially'
          }
      ];

      function getDayClass(data) {
          var date = data.date,
              mode = data.mode;
          if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                  var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                  if (dayToCheck === currentDay) {
                      return $scope.events[i].status;
                  }
              }
          }

          return '';
      }
  });

tempApp.controller('TimepickerDemoCtrl', function ($scope, $log) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.mytime = d;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
});
})();