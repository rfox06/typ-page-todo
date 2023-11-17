import React from 'react'

interface TodoProps {
    todo: string;
    status?: string;
}

export const Todo: React.FC<TodoProps> = ({todo, status}) => {
  const handleClick = (evt: React.MouseEvent) => {
    console.log(evt.type)
  }
  return (
    <>
        <i>{todo}</i>
        <h2>{status}</h2>
        <button onClick={handleClick}>Change text</button>
        <hr/>
    </>
  )
}
