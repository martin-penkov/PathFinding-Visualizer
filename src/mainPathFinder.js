import React, { Component } from 'react'
import Node from './Node'
import './mainPathFinder.css'
import './Algorithms/djikstra'
import calculatePath from './Algorithms/djikstra';
import ReactDOM from 'react-dom'

const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

function GetInitialGrid(){
    const grid = [];

    for (let row = 0; row < 20; row++) {
        let currentRow = [];
        for(let col = 0; col < 45; col++){
            currentRow.push(GetNode(row, col))
        }
        grid.push(currentRow)
    }

    return grid;
}

function GetNode(row, col){
    return {
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
    }
}


export default class PathFinder extends Component{
    constructor() {
        super();
        this.state = {
          grid: []
        };
      }
      componentDidMount() {
        const grid = GetInitialGrid();
        this.setState({grid});
      }

    visualizeDijkstra() {
      let tempCurrentVertex = null
      let tempNeighboursArr = [];
      let rootNode = {node: null, neighbours: []};
        
        setInterval(() => {
          let output = calculatePath(this.state, START_NODE_ROW, START_NODE_COL, tempCurrentVertex, tempNeighboursArr, rootNode)
          tempCurrentVertex = output.currentVertex
          tempNeighboursArr = output.neighbourArr
          this.setState({output});
          ReactDOM.render(this.render(), document.getElementById('root'));
        }, 200);
        
    }

    render() {
    const {grid} = this.state;

    return (
      <>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall, isVisited} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      row={row}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      isVisited={isVisited}
                      ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

