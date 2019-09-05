var product = angular.module("product", []);
product.controller("Ctrl", function($scope, $http){
	$scope.data={};
	$scope.delObj={};
	$scope.getPro=function(){
		$http({
			method : "get",
			url : "http://localhost:3000/api/product/getPro"
		}).then(function(res){
			console.log(res);
			$scope.data=res.data;
		})
	}
	$scope.askDel=function(data){
	$scope.delObj=data;
	}
	$scope.del=function(){
		$http({
			method : "post",
			url : "http://localhost:3000/api/product/del",
			data : $scope.delObj
		}).then(function(res){
			var i = $scope.data.indexOf($scope.delObj);
			$scope.data.splice(i, 1);
			$("#delModal").modal("hide");
		})
	}
	$scope.askEdit=function(x){
		$scope.editObj=x;
		// angular.copy($scope.editObj, x);
	}
	$scope.edit=function(){
		$http({
			method : "post",
			url : "http://localhost:3000/api/product/edit",
			data : $scope.editObj
		}).then(function(res){
			console.log(res.data);
			$("#editModal").modal("hide");
			})
	}

});