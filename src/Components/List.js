import React from 'react'
import ListItem from './ListItem'

const List = ({ id, name, email , roll_no }) => {
    return (
        <div>
            {
                id ? (<ListItem text={"From id"} value={id} />) : null
            }
            {
                name ? (<ListItem text={"name"} value={name} />) : null
            }
            {
                email ? (<ListItem text={"email"} value={email} />) : null
            }
            {
                roll_no ? (<ListItem text={"roll no"} value={roll_no} />) : null
            }
        </div>
    )
}

export default List
