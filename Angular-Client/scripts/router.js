'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/empleados',{
			templateUrl: 'views/note/index.html',
			controller: 'IndexNoteCtrl'
		})
		.when('/empleados/new',{
			templateUrl: 'views/note/create.html',
			controller: 'CreateNoteCtrl'
		})
		.when('/habilidades/new/:id',{
			templateUrl: 'views/note/skill.html',
			controller: 'CreateSkillCtrl'
		})
		.when('/empleados/edit/:id',{
			templateUrl: 'views/note/show.html',
			controller: 'EditNoteCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});