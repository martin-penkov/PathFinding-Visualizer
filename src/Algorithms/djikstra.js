import React from 'react';
function calculatePath(grid, start_node_row, start_node_col){
    let updateGrid = grid;
    let pathTree = [];
    console.log(typeof(updateGrid))
    let currentVertex = null

    //find currentVertex in grid
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
    //set distance of adjacent nodes
    


    //check currentvertex node neighbours and sum current distance with 1 (aka the default distance between each node) after that check 
    // each distance value and take the lower one ... repeat for every adjacent node while ignoring the visited ones. 
    //the one with smallest distance should be taken first and checked 
    //IMPORTANT!!!!! 
}
function ChangeDistanceOfAdjacentNodes(){

}

export default calculatePath

