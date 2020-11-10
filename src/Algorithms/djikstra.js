import React from 'react';
function calculatePath(grid, start_node_row, start_node_col){
    let updateGrid = grid;
    let pathTree = [];
    let currentVertex = null
    let neighboursArr = [];
    let defaultNodeWeight = 1;  //gap between each node



    function main(){
        UpdateCurrentVertex();
        //get adjacent nodes
        neighboursArr = GetAdjacentNodes(updateGrid.grid)

        CalculateDistance(neighboursArr, currentVertex)

        //update state for current node and neighbour node
        //loop this function until the finishnode is reached
    }
    //find currentVertex in grid
    function UpdateCurrentVertex(){
        for(const [key, rowsArray] of Object.entries(updateGrid)){
            for (let rowIdx = 0; rowIdx < rowsArray.length; rowIdx++) {
                const row = rowsArray[rowIdx];
                
                
                currentVertex = row.map((node) => {
                    if(node.row === start_node_row && node.col === start_node_col){
                        node.distance = 0;
                        
                        return node;
                    }
                })
            }
        }
    }
    
    //set distance of adjacent nodes
    
    function updateState(updatedGrid, updatedNode){
        updatedGrid[updatedNode.row][updatedNode.col] = updatedNode;
        return updatedGrid;
        
    }




    function GetAdjacentNodes(rowsArray){
        let neighboursArr = [];
        let topNeighbour = rowsArray[start_node_row-1][start_node_col]
        let rightNeighbour = rowsArray[start_node_row][start_node_col+1]
        let bottomNeighbour = rowsArray[start_node_row+1][start_node_col]
        let leftNeighbour = rowsArray[start_node_row][start_node_col-1]
        
        if(!topNeighbour.isVisited){
            neighboursArr.push(topNeighbour)
        }
        if(!rightNeighbour.isVisited){
            neighboursArr.push(rightNeighbour)
        }
        if(!bottomNeighbour.isVisited){
            neighboursArr.push(bottomNeighbour)
        }
        if(!leftNeighbour.isVisited){
            neighboursArr.push(leftNeighbour)
        }

        console.log(neighboursArr)
        return neighboursArr
    }

    function CalculateDistance(neighbourNodes, currentNode){
        neighbourNodes = neighbourNodes.map((node) => {
            if(defaultNodeWeight + currentNode.distance < node.distance){
                node.distance = defaultNodeWeight + currentNode.distance;
                
            }
            node.previousNode = currentNode
        })
        currentNode.isVisited = true;
    }
    //check currentvertex node neighbours and sum current distance with 1 (aka the default distance between each node) after that check 
    // each distance value and take the lower one ... repeat for every adjacent node while ignoring the visited ones. 
    //the one with smallest distance should be taken first and checked 
    //IMPORTANT!!!!! 
}


export default calculatePath

