class Graph{
  constructor(source, targets){
    this.source = source;
    this.targets = targets;
    this.node = [];
    this.label = [];
    this.nodes_qtn = 0;
    for(var i = 0; i < this.source.length; i++){
      if(!this.exists(this.source[i])){
        this.label[this.source[i]]= this.nodes_qtn;
        this.node[this.nodes_qtn] = new Node(this.source[i]);
        this.nodes_qtn++;
      }
      for(var j = 0; j < this.targets[i].length; j++){
        if(!this.exists(this.targets[i][j])){
          this.label[this.targets[i][j]]= this.nodes_qtn;
          this.node[this.nodes_qtn] = new Node(this.targets[i][j]);
          this.nodes_qtn++;
        }
      }
    }
    this.createLinks();
  }

  exists(label){
    for(var i = 0; i < this.node.length; i++){
      if(label == this.node[i].label){
        return true;
      }
    }
    return false;
  }

  createLinks(){
    for(var i = 0; i < this.source.length; i++){
      for(var j = 0; j < this.targets[i].length; j++){
        this.node[this.label[this.source[i]]].connect(this.node[this.label[this.targets[i][j]]]);
        //For undirected graph uncomment line bellow
        //this.node[this.label[this.targets[i][j]]].connect(this.node[this.label[this.source[i]]]);
      }
    }
  }

  show(){
    fill(255, 255, 255);
    stroke(255, 255, 255);
    for(var i = 0; i < this.node.length; i++){
      ellipse(this.node[i].position.x, this.node[i].position.y, (this.node[i].links.length+1)*5, (this.node[i].links.length+1)*5);
      for(var j = 0; j < this.node[i].links.length; j++){
        line(this.node[i].position.x, this.node[i].position.y, this.node[i].links[j].position.x, this.node[i].links[j].position.y);
      }
    }
  }

  drawArrow(a, b, size){
    var x_orientation = 0, y_orientation = 0;
    if(b.position.x >= a.position.x){
      x_orientation = 1;
    }else{
      x_orientation = -1;
    }
    if(b.position.y >= a.position.y){
      y_orientation = 1;
    }else{
      y_orientation = -1;
    }
  }
}

class Node{
  constructor(label = "", weight = 1){
    this.label = label;
    this.weight = weight;
    this.links = [];
    this.size = 20;
    this.position = {
      x: floor(random(this.size, windowWidth-this.size)),
      y: floor(random(this.size, windowHeight-this.size))
    }
  }

  connect(node){
    this.links.push(node);
  }
}
