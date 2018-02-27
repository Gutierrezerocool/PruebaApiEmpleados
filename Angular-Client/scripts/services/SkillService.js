'use strict';

angular.module('Client')
	.factory('SkillResource', function($resource) {
		return $resource("http://localhost:8000/habilidades/:id", {
			id: "@id"
		}, {
			update: {
				method: "PUT"
			}
		});
	});