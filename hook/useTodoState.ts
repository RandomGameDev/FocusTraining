import { useState } from "react"

export const useTodoState = () => {
    const [todo, setTodo] = useState([])

    return {
        todo,
        setTodo
    }
}