import {useEffect, useState} from "react"
export default function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState([]);
    const [msg, setMsg] = useState([]);
    const [editID, setEditID] = useState(-1);
    const apiUrl = "http://localhost:8000"

    //EDIT

    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");


    const handleSubmit = () => {
        setError("") //inorder to clear out the error message before the next submit 
        //check input values 
        if (title.trim() !== '' && description.trim() !== '') {
            fetch(apiUrl + "/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, description})
            
            }).then((res) => {
                if (res.ok) {
                    //add to local storage
                    setTodos([...todos, { title, description }])
                    setTitle("");
                    setDescription("");
                    setMsg("Item Added Successfully")
                    setTimeout(() => {
                        setMsg("")
                    }, 3000)  //setting a timeout of 3seconds where the message will be cleared after 3 seconds
                    window.location.reload()
                } else {
                    //error setting
                    setError("Unable to create task")
                    setTimeout(() => {
                        setError("")
                    },3000) 
                }

            }).catch(() => {
                setError("Unable to create task")
                setTimeout(() => {
                    setError("")
                },3000)
            })



            
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        fetch(apiUrl + "/todos")
            .then((res) => res.json())
        .then((res) => {
            setTodos(res)
        })
    }

    const handleEdit = (item) => {
        setEditID(item._id);
        setEditTitle(item.title);
        setEditDescription(item.description);
    }

    const handleUpdate = () => {
        //update tasks
        setError("") //inorder to clear out the error message before the next submit 
        //check input values 
        if (editTitle.trim() !== '' && editDescription.trim() !== '') {
            fetch(apiUrl + "/todos/" + editID, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: editTitle, description: editDescription })
            
            }).then((res) => {
                if (res.ok) {
                    //update to local storage
                    const updatedTodos = todos.map((item) => {
                        if (item._id === editID) {
                            item.title = editTitle;
                            item.description = editDescription;
                        }
                        return item;
                    
                    })

                    setTodos(updatedTodos)
                    setEditTitle("");
                    setEditDescription("");
                    setMsg("Item Updated Successfully")
                    setTimeout(() => {
                        setMsg("")
                    }, 3000) //setting a timeout of 3seconds where the message will be cleared after 3 seconds

                    setEditID(-1);
                    window.location.reload()
                } else {
                    //error setting
                    setError("Unable to create task")
                    setTimeout(() => {
                        setError("")
                    }, 3000)
                }

            }).catch(() => {
                setError("Unable to create task")
                setTimeout(() => {
                    setError("")
                }, 3000)
            })
        }
    }

     const handleEditCancel = () => {
        setEditID(-1)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            fetch(apiUrl+'/todos/'+id, {
                method: "DELETE"
            })
            .then(() => {
               const updatedTodos = todos.filter((item) => item._id !== id)
               setTodos(updatedTodos)
            })
        }
    }





    return <>
        <div className="row p-3 bg-success text-light">
            <h1> Task Helper </h1>
        </div>

        <div className="row mt-3">
            <h3> Add Task Below</h3>
            {msg && <p className="text-sucess"> {msg} </p>}
          
            <div className="form-group d-flex gap-2">
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' type="text" />
                <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} className='form-control' type="text" />
                <button className="btn btn-dark" onClick={handleSubmit}> Submit </button>
                
                
            </div>
            {error && <p className="text-danger"> {error} </p>}
        </div>
        <div className="row mt-3">
            <h3 className="font-style-italic"> Task List </h3>
            <div>
            <ul className="list-group">
                {
                    todos.map((item) => 
                        <li className="list-group-item bg-info d-flex justify-content-between text-start my-2">
                            <div className="d-flex flex-column me-2">
                                {
                                    editID === -1 || editID !==item._id ? <>
                                        <span className="fw-bold">{item.title}</span>
                                        <span>{item.description}</span>
                                    </> : <>
                                    <div className="form-group d-flex gap-2">
                                        <input placeholder="Title" onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className='form-control' type="text" />
                                        <input placeholder="Description" onChange={(e) => setEditDescription(e.target.value)} value={editDescription} className='form-control' type="text" />
                                    </div>
                                        
                                    </>
                                }
                                 
                            </div>
                            
                            <div className="d-flex gap-2">
                                { editID === -1 ?<button className="btn btn-warning" onClick={() => handleEdit(item)} >Edit</button>:<button className="btn btn-warning" onClick={handleUpdate} >Update</button>}
                                { editID === -1 ? <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button> :
                                <button className="btn btn-danger" onClick={handleEditCancel}>Cancel</button> }
                            </div>
                            
                    
                        </li>
                        

                    )
                    
                }
                
            
                
            </ul>
            </div>
           
        </div>

    </>
}