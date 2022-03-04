import React, { useState, useEffect } from 'react'
import './Todo.css'

const getdata = () => {
    const list = localStorage.getItem("todolist");
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

const Todo = () => {

    const [val, setVal] = useState('');
    const [hash, setHash] = useState(getdata());
    const [one, setOne] = useState('');
    const [toogle, setToogle] = useState(false);

    const [k, setK] = useState();
    const Add = () => {
        if (val == "") {
            alert("Please Enter the data");
        }
        else {
            setHash([...hash, val]);
            setVal('');
        }

    }
    const solve = () => {
        const data = hash.filter((ele, i) => {
            return i != k;
        })
        setHash(data);
    }
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(hash));
    }, [hash]);



    const solve1 = (id) => {

        const list1 = hash.find((ele, i) => {
            return i == id;
        })

        const l1 = hash.filter((ele, i) => {
            return i != id;
        })
        setHash(l1);
        setVal(list1);
        setOne(id);
        setToogle(true);

    }
    return (
        <>
            <div className="main_div">

                <div className="child_div">
                    <figure>
                        <img src="./Images/todo.svg" alt="todolog" srcset="" />
                        <figcaption>
                            Add Your List Here
                        </figcaption>

                    </figure>
                    <div className="addItems">

                        <input type="text" placeholder="✍  Add Item's" className="form_control" value={val} onChange={(ele) => setVal(ele.target.value)} />
                        {toogle ? <i className="far fa-edit add-btn" onClick={() => setToogle(false)} /> : <i className="fa fa-plus add-btn" onClick={Add} />}



                        <div className="showItems">


                            {hash.map((ele, i) => {
                                return (
                                    <>
                                        <div className="eachItem" key={i} onMouseEnter={() => setK(i)}>
                                            <h3>{ele}</h3>
                                            <div className="todo-btn">

                                                <i className="far fa-edit add-btn" onClick={() => solve1(i)} />
                                                <i className="far fa-trash-alt add-btn" onClick={solve} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}








                        </div>


                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => setHash([])}><span>Check List</span></button>

                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Todo;