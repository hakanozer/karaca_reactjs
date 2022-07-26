import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { ENote } from './useRedux/ENote'
import { INote } from './useRedux/INote'
import { NoteAction } from './useRedux/NoteReducer'
import { StateType } from './useRedux/Store'

function Note() {

    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")

    // Reducerlar arasından hengisinin tektiklemesi gerektiğine useDispatch ile karar verilir.
    const dispatch = useDispatch()
    const noteArr = useSelector( ( item: StateType ) => item.noteReducer )



  const sendForm = (evt: React.FormEvent) => {
    evt.preventDefault()
    const item:INote = {
        nid: 0,
        title: title,
        detail: detail
    }
    const action:NoteAction = {
       type: ENote.NOTE_ADD,
       payload: item 
    }
    dispatch(action)
  }  


  const itemDelete = (item:INote) => {
    const action:NoteAction = {
        type: ENote.NOTE_DELETE,
        payload: item
    }
    dispatch( action )
  }
    


  return (
    <>
    <Helmet>
      <title>Note Page</title>
      <meta name="description" content="Note App" />
    </Helmet>

        <div className='row'>
            <div className='col-sm-6'>
                <h3>Note Add</h3>
                <form onSubmit={sendForm}>
                    <div className='mb-3'>
                        <input onChange={(evt) => setTitle( evt.target.value )} className='form-control' placeholder='Title' />
                    </div>
                    <div className='mb-3'>
                        <input onChange={(evt) => setDetail( evt.target.value )} className='form-control' placeholder='Detail' />
                    </div>
                    <button type='submit' className='btn btn-success'>Send</button>
                </form>
            </div>
            <div className='col-sm-6'>
                <h3>Note List</h3>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    { noteArr.map( (item, index) =>
                    <tr key={index}>
                        <th scope="row">{ item.nid }</th>
                        <td> { item.title } </td>
                        <td> { item.detail } </td>
                        <td> <button onClick={(evt) => itemDelete(item) } className='btn  btn-danger btn-sm'><i className="bi bi-trash3"></i></button> </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Note