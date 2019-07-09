class Node{
  constructor(label){
    this.label = label;
    this.edges = [];
  }

  connect(node){
    this.edges.push(node);
  }

  isConnectedTo(node){
    return this.label == node.label;
  }
}
