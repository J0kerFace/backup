<?php

return [

	'ocs' => [
		['name' => 'Local#scanLocalFolder', 'url' => '/scan/{fileId}', 'verb' => 'PUT'],
		['name' => 'Local#getSettings', 'url' => '/settings', 'verb' => 'GET'],
		['name' => 'Local#setSettings', 'url' => '/settings', 'verb' => 'PUT'],
		['name' => 'Local#getRestoringPoint', 'url' => '/rp', 'verb' => 'GET']
	],

	'routes' => [
		['name' => 'Remote#appService', 'url' => '/', 'verb' => 'GET'],
		['name' => 'Remote#test', 'url' => '/test', 'verb' => 'GET'],

		['name' => 'Remote#listRestoringPoint', 'url' => '/rp', 'verb' => 'GET'],
		['name' => 'Remote#getRestoringPoint', 'url' => '/rp/{pointId}', 'verb' => 'GET'],
		['name' => 'Remote#healthRestoringPoint', 'url' => '/rp/{pointId}/health', 'verb' => 'GET'],
		['name' => 'Remote#downloadRestoringPoint', 'url' => '/rp/{pointId}/{chunkName}download', 'verb' => 'GET'],
		['name' => 'Remote#createRestoringPoint', 'url' => '/rp', 'verb' => 'PUT'],
		['name' => 'Remote#updateRestoringPoint', 'url' => '/rp/{pointId}', 'verb' => 'POST'],
		['name' => 'Remote#deleteRestoringPoint', 'url' => '/rp/{pointId}', 'verb' => 'DELETE'],
		['name' => 'Remote#uploadRestoringChunk', 'url' => '/rp/{pointId}/{chunkName}', 'verb' => 'POST']
	]
];
