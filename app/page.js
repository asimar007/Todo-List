"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  const deletehlr = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const submithlr = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, { title, desc }])
    settitle("")
    setdesc("")
  }
  // ! Main Task Code
  let renderTask = <h2 className='text-2xl font-semibold '>No Task Available</h2>

  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (

        <li key={i} className='flex item-center justify-between'>
          <div className='flex item-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-2xl font-semibold'>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletehlr(i)
            }}
            className='bg-red-600 rounded px-3 py-2 text-white mb-5'>Delete</button>
        </li>
      )
    })
  }
  // ! Main Task Code
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Asim Todo List</h1>
      <form onSubmit={submithlr}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Your Task'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-black text-white rounded px-4 py-3 text-2xl font-bold m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        {renderTask}
      </div>
    </>
  )
}

export default page