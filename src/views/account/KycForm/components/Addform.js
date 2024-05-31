// Click here for video: https://www.youtube.com/watch?v=jn-iq1dKB38&t=379s

// *************** start here react code ******************
import React, { useEffect, useState } from 'react'
import { HiCheckCircle, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'
// import { Container } from "react-bootstrap";
import useThemeClass from 'utils/hooks/useThemeClass'
import Abc from './Abcform'

function Addform() {
    const { textTheme } = useThemeClass()

    const [inputList, setinputList] = useState([
        
    ])

    const handleinputchange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value
        setinputList(list)
    }

    const handleremove = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setinputList(list)
    }

    useEffect(() => {
        console.log('inputttt', inputList)
    }, [inputList])

    const handleaddclick = () => {
        setinputList([...inputList, { firstName: '', lastName: '' }])
    }
    return (
        <section className="content">
            <div className="row">
                <div className="col-sm-12">
                    {inputList.map((x, i) => {
                        return (
                            <div className="row mb-3">
                                <Abc/>

                                {/* <h1>Ashutosh</h1> */}
                                {/* <input type="text"  name="lastName" class="form-control"   placeholder="Enter Last Name" onChange={ e=>handleinputchange(e,i) }/> */}
                                   
                            </div>
                        )
                    })}
                                <div className='flex justify-end items-center'>
                                    {inputList.length > 0 && (
                                        <button
                                            className="btn btn-danger svgsize  mx-1"
                                            onClick={() => handleremove(0)}
                                            
                                        >
                                            <HiOutlineMinus
                                                className={textTheme}
                                            />
                                        </button>
                                    )}
                                    { (
                                        <button
                                            className="btn btn-success svgsize"
                                            onClick={handleaddclick}
                                        >
                                            <HiOutlinePlus
                                                className={textTheme}
                                            />
                                        </button>
                                    )}
                                </div>
                </div>
            </div>
        </section>
    )
}
export default Addform
