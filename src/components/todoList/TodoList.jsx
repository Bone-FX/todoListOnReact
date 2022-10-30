import React from "react";
import TodoListItem from "../todoListItem";


const TodoList = ({items, onRemove, onToggleDone, onMark}) => {
  const elements = items.map(({id, done, label, mark}) => {

       return <li key={id}>
            <TodoListItem
                label={label}
                done={done}
                mark={mark}
                onRemove={() => onRemove(id)}
                onToggleDone={() => onToggleDone(done)}
                onMark={() => onMark(mark)}

            />
        </li>
    })

    return <ul>
        {elements}
    </ul>
}

export default TodoList