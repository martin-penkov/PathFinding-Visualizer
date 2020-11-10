import React from 'react'
import './Node.css';

class Node extends React.Component {
    render(){
        const {
            row,
            col,
            isFinish,
            isStart,
            isWall,
            isVisited
        } = this.props
        let returnOutput = React.createElement('div', 
            {id:`node_row:${row}   node_col:${col}`,
             className:`node${isFinish ? ' nodefinish' : ''}${isStart ? ' nodestart' : ''}${isWall ? ' nodewall' : ''}${isFinish ? ' nodevisited' : ''}`})
        
        return (
            returnOutput
        )
    }
}

export default Node