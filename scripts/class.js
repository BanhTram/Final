app.classCtrl = function ($scope, $location) {
    $scope.klasses = [
        { name: 'Lop', parentID: 0, prefix: '', belong: 'none', orderBy: 1000, level: 1 },
        { name: 'Lop 10', parentID: 10, prefix: '', belong: 'none', orderBy: 2000, level: 1 },
        { name: 'Lop 10A1', parentID: 10, prefix: '____', belong: 'Lop 10', orderBy: 2750, level: 3 },
        { name: 'Lop 10A2', parentID: 10, prefix: '____', belong: 'Lop 10', orderBy: 2850, level: 3 },
        { name: 'Lop 11', parentID: 11, prefix: '', belong: 'none', orderBy: 3000, level: 1 },
        { name: 'Lop 11A', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3500, level: 2 },
        { name: 'Lop 11A1', parentID: 11, prefix: '____', belong: 'Lop 11', orderBy: 3625, level: 3 },
        { name: 'Lop 11A2', parentID: 11, prefix: '____', belong: 'Lop 11', orderBy: 3687, level: 3 },
        { name: 'Lop 11B', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3750, level: 2 },
        { name: 'Lop 11C', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3875, level: 1 },
        { name: 'Lop 12', parentID: 12, prefix: '', belong: 'none', orderBy: 4000, level: 1 },
        { name: 'Lop 12A', parentID: 12, prefix: '__', belong: 'Lop 12', orderBy: 4500, level: 2 },
        { name: 'Lop 12A1', parentID: 12, prefix: '____', belong: 'Lop 12', orderBy: 4625, level: 3 },
        { name: 'Lop 12A2', parentID: 12, prefix: '____', belong: 'Lop 12', orderBy: 4687, level: 3 },
        { name: 'Lop 12B', parentID: 12, prefix: '__', belong: 'Lop 12', orderBy: 4750, level: 2 },
    ];

    $scope.addClass = function () {
        $location.path('/addClass');
    }

    $scope.saveAddClass = function (name, belong) {
        if ((name != null || name != undefined) &&
            (belong != null || belong != undefined)
        ) {
            let index = $scope.klasses.findIndex(temp => temp.name === belong);
            var tempOrderByBefore = $scope.klasses[index].orderBy * 1;
            var tempOrderByAfter = $scope.klasses[index + 1].orderBy * 1;
            var result = (tempOrderByBefore + tempOrderByAfter) / 2;
            var tempKlass = {
                name: name,
                parentID: $scope.klasses[index].parentID,
                prefix: $scope.klasses[index].prefix + '__',
                belong: belong,
                orderBy: result
            };

            $scope.klasses.push(tempKlass);

            $location.path('/class');
        }
    }

    $scope.editClass = function (klass, belong) {
        if (belong == 'none') {
            alert("Ban khong the sua lop nay!");
        } else {
            $scope.klass = klass;
            $location.path('/editClass');
        }
    }

    $scope.saveEditClass = function (name, belong) {
        if ((name != null || name != undefined) &&
            (belong != null || belong != undefined)
        ) {
            $location.path('/class');
        }
    }

    $scope.maxLevel = function (array) {
        var max = $scope.klasses[0].level;
        for (var i = 1; i < $scope.klasses.length; i++) {
            if (max < $scope.klasses[i]) {
                max = $scope.klasses[i];
            }
        }
        return max;
    }

    $scope.deleteClass = function (klass) {
        var index = $scope.klasses.indexOf(klass);
        $scope.klasses.splice(index, 1);
        // var tempParentID = $scope.klasses[index].parentID;
        // var tempLevel = $scope.klasses[index].tempLevel;

        // alert($scope.maxLevel($scope.klasses));
        
        // for (var i = tempLevel; i <= Max.max($scope.klasses[index].level); i++) {
        //     if ($scope.klasses.level == i && $scope.klasses.parentID == tempParentID)
        // }
    }
}
