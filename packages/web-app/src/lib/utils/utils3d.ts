export const SUPPORTED_3D_TYPES = [
	'WMS',
	'WMTS',
	'ESRI REST',
	'OGCMAP',
	'FEATURE',
	'COVERAGE',
	'CELESTIAL',
	'SENSORTHINGS',
	'GEOJSON',
	'KML',
	'3DTILES',
	'COG',
	//'GPKG',
	//'SHAPEFILE'

];

export function create3dRequestBody(properties: any, row: any): {} {
	switch (row['format']) {
		default:
			return {};
		case 'WMS':
			return {
				type: 'WMS',
				args: {
					uid: properties.id,
					capabilitiesUrl: row['url'],
					name: '',
					credit: '',
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'WMTS':
			return {
				type: 'WMTS_SERVICE',
				args: {
					uid: properties.id,
					credit: '',
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					},
					capabilitiesUrl: row['url']
				}
			};
		case 'ESRI REST':
			return {
				type: 'ARCGISWMS',
				args: {
					uid: properties.id,
					title: '',
					id: '',
					description: properties.description.en,
					url: row['url'],
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					},
					wgs84BoundingBox: {
						minX: properties.extent.west,
						minY: properties.extent.south,
						maxX: properties.extent.east,
						maxY: properties.extent.north
					},
					credit: ''
				}
			};
		case 'OGCMAP':
			return {
				type: 'OGCMAP',
				args: {
					type: 'OgcMap',
					uid: properties.id,
					name: '',
					show: true,
					url: row['url'],
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					},
					bounds: {
						minX: properties.extent.west,
						minY: properties.extent.south,
						maxX: properties.extent.east,
						maxY: properties.extent.north
					},
					description: '',
					credit: ''
				}
			};
		case 'FEATURE':
			return {
				type: 'FEATURE',
				args: {
					uid: properties.id,
					url: row['url'],
					title: '',
					description: '',
					wgs84BoundingBox: {
						minX: properties.extent.west,
						minY: properties.extent.south,
						maxX: properties.extent.east,
						maxY: properties.extent.north
					},
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'COVERAGE':
			return {
				type: 'COVERAGE',
				args: {
					uid: properties.id,
					title: '',
					url: row['url'],
					description: '',
					sourceLayerIndex: '',
					id: '',
					wgs84BoundingBox: {
						minX: properties.extent.west,
						minY: properties.extent.south,
						maxX: properties.extent.east,
						maxY: properties.extent.north
					},
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'CELESTIAL':
			return {
				"type": "CELESTIAL",
				"args": {
						"uid": properties.id,
						"name": properties.title.en,
						"show": true,
						"type": "Celestial",
						"url": row['url']
				}
			};
		case 'SENSORTHINGS':
			return {
				type: 'SENSORTHINGS',
				args: {
					uid: properties.id,
					url: row['url'],
					title: properties.title.en,
					description: properties.description.en,
					wgs84BoundingBox: {
						minX: properties.extent.west,
						minY: properties.extent.south,
						maxX: properties.extent.east,
						maxY: properties.extent.north
					},
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'GEOJSON':
			return {
				type: 'GEOJSON',
				args: {
					uid: properties.id,
					urlOrGeoJsonObject: row['url'],
					title: properties.title.en,
					description: properties.description.en,
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'KML':
			return {
				type: 'KML',
				args: {
					uid: properties.id,
					url: row['url'],
					title: properties.title.en,
					description: properties.description.en,
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case '3DTILES':
			return {
				type: '3DTILES',
				args: {
					uid: properties.id,
					url: row['url'],
					title: properties.title.en,
					description: properties.description.en,
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					},
					show: true
				}
			};
		case 'COG':
			return {
				type: 'COG',
				args: {
					uid: properties.id,
					url: row['url'],
					name: properties.title.en,
					description: properties.description.en,
					projection: 'REPLACE_WITH_REAL_VALUE',
					serviceInfo: {
						serviceTitle: row['name'],
						serviceId: properties.id,
						serviceUrl: row['url']
					}
				}
			};
		case 'CATALOG':
			return {
				type: 'CATALOG',
				args: {
					uid: properties.id,
					title: row['name'],
					url: row['url'],
					type: 'STAC'
				}
			};
	}
}
