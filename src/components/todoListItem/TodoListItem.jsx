import React from "react";
import './todoListItem.css';


class TodoListItem extends React.Component {






    render() {
console.log(this.props )
        const {done, mark} = this.props
        let styleMark = 'item'
        if (done) {
            styleMark += ' done'}
        if (mark) {
            styleMark += ' mark'}


        return (
            <div >
            <span className ={styleMark} onClick={this.props.onToggleDone}>
                {this.props.label}
            </span  >
                <button onClick={this.props.onRemove}>D</button>
                <button onClick={this.props.onMark}>!</button>
            </div>)

    }
}


//
//
// const TodoListItem = () => {
//     return (
//
//         <div>
//             <span>Name task
//                 <button onClick={() => }>D</button>
//
//                 <button>!</button>
//             </span>
//         </div>
//
//
//     )
// }

export default TodoListItem