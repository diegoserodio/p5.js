let graph;

var data = {
	info: [{
			"name": 'Eduardo',
			"property": [55]
		},
		{
			"name": 'Diego',
			"property": [10, 25]
		},
		{
			"name": 'Samanta',
			"property": [30, 25, 20]
		},
		{
			"name": 'Rafael',
			"property": [5, 20]
		},
		{
			"name": 'Marcela',
			"property": [10]
		},
		{
			"name": 'Deths',
			"property": [35, 23, 10]
		},
	]
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	graph = new Graph();
	for(var i = 0; i < data.info.length; i++){
		var node = graph.getNode(data.info[i]);
		if(node ==  undefined){
			node = new Node(data.info[i]);
			graph.addNode(node);
		}
	}
}

function draw() {
	background(0, 0, 0);
	graph.show();
	fill(255, 255, 255);
	ellipse(100, 100, 50, 50);
}
