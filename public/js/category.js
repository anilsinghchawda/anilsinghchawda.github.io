var category = angular.module("category", []);
category.controller("ctrl", function($scope, $http){
		$scope.data=[];
		$scope.addCate={};
		$scope.spinner=false;
	$scope.getCate=function(){
		$http({
			method : "get",
			url : "http://localhost:3000/api/category/getCate"
		}).then(function(res){
			console.log(res);
			$scope.data=res.data;
		})
	}
	$scope.add=function(){
		$http({
			method : "post",
			url : "http://localhost:3000/api/category/add",
			data : $scope.addCate
		}).then(function(res){
			$scope.data.push(res.data.ops[0]);
			$scope.spinner=true;
			$("#addCate").modal("hide");
		})
	}
	$scope.askDel=function(x){
			$scope.delObj = x;
			}

	$scope.del=function(){
			$("#delModal").modal("hide");
		$http({
			method : "post",
			url : "http://localhost:3000/api/category/del",
			data : $scope.delObj
		}).then(function(res){
			var i = $scope.data.indexOf($scope.delObj);
			$scope.data.splice(i, 1);
		})
	}
	$scope.askEdit=function(x){
		$scope.editObj = x;
	}


	$scope.edit=function(){
		$http({
			method : "post",
			url : "http://localhost:3000/api/category/edit",
			data : $scope.editObj
		}).then(function(res){
			$("#editModal").modal("hide");
		})
	}
});