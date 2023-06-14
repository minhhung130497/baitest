import React, { useState } from 'react'
import { useEffect } from 'react'

export default function ChildComponent({ getData ,handleClick }) {
    const [comments, setCommants] = useState(0)

    useEffect(() => {
        getData('conmments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setCommants(comments)
            })
        return () => {

        }
    }, [getData])




    return (
        <div>
            {/* <button onClick={handleClick}>getuser child</button> */}
            <p>child component</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}


