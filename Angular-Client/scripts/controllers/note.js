'use strict';

angular.module('Client')
	.controller('IndexNoteCtrl', function($scope, NoteResource, $location, $timeout) {
		$scope.Notes = NoteResource.query();

		$scope.removeNote = function(id) {
			NoteResource.delete({
				id: id
			});
			Materialize.toast('Empleado Eliminado.', 5000, 'red accent-4');
			$timeout(function() {
				$location.path('/empleados');
			}, 1000);
		};
	})
	.controller('CreateNoteCtrl', function($scope, NoteResource, $location, $timeout) {
		$scope.title = "Crear Empleado";
		$scope.button = "Guardar";
		$scope.Note = {};
		$scope.saveNote = function() {
			NoteResource.save($scope.Note);
			Materialize.toast('¡Empleado Creado exitosamente!.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/empleados');
			}, 1000);
			//console.log($scope.Note);
		};
	})
	.controller('CreateSkillCtrl', function($scope, SkillResource, $location, $timeout,$routeParams) {
		$scope.title = "Agregar Habilidades";
		$scope.button = "Guardar";
		$scope.skill = {id: $routeParams.id};
		$scope.Note = {};
		$scope.saveSkill = function() {
			SkillResource.save($scope.Note); 
			Materialize.toast('¡Habilidades Agregadas!.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/empleados');
			}, 1000);
			//console.log($scope.Note);
		};
	})
	.controller('EditNoteCtrl', function($scope, NoteResource, $location, $timeout, $routeParams) {
		$scope.title = "Ver y Actualizar Empleado";
		$scope.button = "Actualizar";
		$scope.Note = NoteResource.get({
			id: $routeParams.id
		});

		$scope.saveNote = function() {
			NoteResource.update($scope.Note);
			Materialize.toast('Empleado Actualizado.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/empleados');
			}, 1000);
		};
	});