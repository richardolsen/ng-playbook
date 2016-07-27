"use strict";

var app = angular.module('coLearn', []);
app.controller('coLearnCtrl', function($scope, $templateCache, $http, $sce) {
	console.log('coLearn Playbook loaded...');

	$scope.plays = [];

	$scope.introduction = '';

	var url = 'includes/introduction.md';

	$http.get(url).then( function(result){

			if (result.status ==200) {

				var converter = new showdown.Converter();

				$scope.introduction = $sce.trustAsHtml(converter.makeHtml(result.data));

			}

			getPlay(1);
		});

	

	function getPlay(num) {
		if ( num < 10 ) {
			var url = 'plays/0'+num+'.md';
		} else {
			var url = 'plays/'+num+'.md';
		}

		$http.get(url).then( function(result){

			if (result.status ==200) {
				
				var play_number_location = result.data.indexOf('play_number:');
				var play_title_location = result.data.indexOf('title:');
				var end_title_location = result.data.indexOf('---', play_title_location);

				var play_number = result.data.substring(play_number_location + 13,  play_title_location -1 );
				var play_title = result.data.substring(play_title_location + 7, end_title_location -1);

				var html = result.data.substring(end_title_location+4); //Add br to the end as there is a problem with the markdown script

				//var play_description = $sce.trustAsHtml(micromarkdown.parse(html, false));

				var converter = new showdown.Converter();
    			var play_description = $sce.trustAsHtml(converter.makeHtml(html));

				$scope.plays.push({play_number: play_number, text: play_description, title: play_title});
				
				getPlay(num+1);
			}

		});
	}
});