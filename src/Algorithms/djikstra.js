
function calculatePath(grid, start_node_row, start_node_col, previousNeighbours){
    let updateGrid = grid;
    //let pathTree = [];
    let defaultNodeWeight = 1;  //gap between each node
    let newNeighbours = [];


    return {grid: main(), previousNeighbours}

    function main(){
        UpdateCurrentVertex();
        //get adjacent nodes
        GetAdjacentNodes(updateGrid.grid)

        CalculateDistance()
        for (let i = 0; i < previousNeighbours.length; i++) {
            const node = previousNeighbours[i];
            updateGrid.grid[node.row][node.col] = node
        }
        previousNeighbours = [];
        for (let i = 0; i < newNeighbours.length; i++) {
            const element = newNeighbours[i];
            updateGrid.grid[element.row][element.col] = element
            previousNeighbours.push(element);
        }


        let noDuplicates = ([...new Set(previousNeighbours)])
        previousNeighbours = [...noDuplicates]
        return updateGrid;
    }
    //find currentVertex in grid
    function UpdateCurrentVertex(){
        if(previousNeighbours.length === 0){
            //Find first element and set distance to
            let startVertex = updateGrid.grid[start_node_row][start_node_col]
            startVertex.distance = 0;
            previousNeighbours.push(startVertex);
        }
    }
    //set distance of adjacent nodes
    // function updateState(updatedGrid, updatedNode){
    //     updatedGrid[updatedNode.row][updatedNode.col] = updatedNode;
    //     return updatedGrid;
    // }
    function GetAdjacentNodes(rowsArray){
        for (let i = 0; i < previousNeighbours.length; i++) {
            const neighbour = previousNeighbours[i];
            
            try {
                var topNeighbour = rowsArray[neighbour.row-1][neighbour.col]
                topNeighbour.rootNeighbour = neighbour
            } catch(err){}
            try {
                var rightNeighbour = rowsArray[neighbour.row][neighbour.col+1]
                rightNeighbour.rootNeighbour = neighbour
            } catch(err){}
            try{
                var bottomNeighbour = rowsArray[neighbour.row+1][neighbour.col]
                bottomNeighbour.rootNeighbour = neighbour
            } catch(err) {}
            try{
                var leftNeighbour = rowsArray[neighbour.row][neighbour.col-1]
                leftNeighbour.rootNeighbour = neighbour
            } catch(err) {}
            //remove visited ones
            try {
            if(!topNeighbour.isVisited){
                newNeighbours.push(topNeighbour)
            }
            } catch(err) {}
            try {
            if(!rightNeighbour.isVisited){
                newNeighbours.push(rightNeighbour)
            }
            } catch(err) {}
            try{
            if(!bottomNeighbour.isVisited){
                newNeighbours.push(bottomNeighbour)
            }
            } catch(err) {}
            try{
            if(!leftNeighbour.isVisited){
                newNeighbours.push(leftNeighbour)
            }
            } catch(err) {}
        }
        console.log(newNeighbours)
    }

    function CalculateDistance(){

        

        

        newNeighbours = newNeighbours.map((node) => {
            if(defaultNodeWeight + node.rootNeighbour.distance < node.distance){
                node.distance = defaultNodeWeight + node.rootNeighbour.distance;
            }
            //node.previousNode = currentVertex
            return node
        })
        
        for (let i = 0; i < previousNeighbours.length; i++) {
            const node = previousNeighbours[i];
            node.isVisited = true;
        }
    }
}

export default calculatePath

//initial method

    //check currentvertex node neighbours and sum current distance with 1 (aka the default distance between each node) after that check 
    // each distance value and take the lower one ... repeat for every adjacent node while ignoring the visited ones. 
    //the one with smallest distance should be taken first and checked 
    //IMPORTANT!!!!! 