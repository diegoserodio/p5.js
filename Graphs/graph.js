class Graph{
  constructor(){
    this.nodes = [];
  }

  getNode(_label){
    for(var i = 0; i < this.nodes.length; i++){
      if(this.nodes[i].label.name == _label.name){
        return this.nodes[i];
      }
    }
  }

  addNode(node){
    this.nodes.push(node);
  }

	show(){
		fill(150);
    stroke(255, 255, 255);
    strokeWeight(2);
		for(var i = 0; i < this.nodes; i++){
			for(var j = 0; j < this.arrayNodes[i].length; j++){
				line(this.node[i].x, this.node[i].y, this.node[this.arrayNodes[i][j]].x, this.node[this.arrayNodes[i][j]].y);
			}
		}
    for(var i = 0; i < this.nodes; i++){
      ellipse(this.node[i].x, this.node[i].y, this.size, this.size);
    }
	}
}
