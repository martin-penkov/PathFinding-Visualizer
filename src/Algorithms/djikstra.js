
function calculatePath(grid, start_node_row, start_node_col, currentVertex, neighboursArr){
    let updateGrid = grid;
    let pathTree = [];
    let defaultNodeWeight = 1;  //gap between each node
    

    return {grid: main(), currentVertex: currentVertex, neighbourArr: neighboursArr}

    function main(){
        UpdateCurrentVertex();
        //get adjacent nodes
        neighboursArr = GetAdjacentNodes(updateGrid.grid)

        CalculateDistance()
        for (let i = 0; i < neighboursArr.length; i++) {
            const element = neighboursArr[i];
            updateGrid.grid[element.row][element.col] = element
        }
        updateGrid.grid[currentVertex.row][currentVertex.col] = currentVertex;
        return updateGrid;
        //loop this function until the finishnode is reached
    }
    //find currentVertex in grid
    function UpdateCurrentVertex(){
        if(currentVertex !== null){
            let temp = Infinity;
            neighboursArr.map((node) => {
                if(node.distance < temp){
                    temp = node.distance
                }
            })
            currentVertex = neighboursArr.find((node) => {
                if(node.distance === temp){
                    return node;
                }
            })
        }
        else{
            currentVertex = updateGrid.grid[start_node_row][start_node_col]
            currentVertex.distance = 0;
        }
    }
    //set distance of adjacent nodes
    // function updateState(updatedGrid, updatedNode){
    //     updatedGrid[updatedNode.row][updatedNode.col] = updatedNode;
    //     return updatedGrid;
    // }
    function GetAdjacentNodes(rowsArray){
        let neighboursArr = [];
        let topNeighbour = rowsArray[start_node_row-1][start_node_col]
        let rightNeighbour = rowsArray[start_node_row][start_node_col+1]
        let bottomNeighbour = rowsArray[start_node_row+1][start_node_col]
        let leftNeighbour = rowsArray[start_node_row][start_node_col-1]

        // let topNeighbour = rowsArray[rootNode.node.row-1][rootNode.node.col]
        // let rightNeighbour = rowsArray[rootNode.node.row][rootNode.node.col+1]
        // let bottomNeighbour = rowsArray[rootNode.node.row+1][rootNode.node.col]
        // let leftNeighbour = rowsArray[rootNode.node.row][rootNode.node.col-1]
        
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

    function CalculateDistance(){

        neighboursArr = neighboursArr.map((node) => {
            if(defaultNodeWeight + currentVertex.distance < node.distance){
                node.distance = defaultNodeWeight + currentVertex.distance;
                
            }
            node.previousNode = currentVertex
            return node
        })
        currentVertex.isVisited = true;
    }
    //check currentvertex node neighbours and sum current distance with 1 (aka the default distance between each node) after that check 
    // each distance value and take the lower one ... repeat for every adjacent node while ignoring the visited ones. 
    //the one with smallest distance should be taken first and checked 
    //IMPORTANT!!!!! 
}


export default calculatePath

