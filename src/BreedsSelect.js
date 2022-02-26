// DO NOT DELETE
import React from 'react'

export function BreedsSelect (props) {
    
    return (
        <select value={props.selected} onChange={props.change}>
            {Object.keys(props.breeds).map((breed) => <option key={breed} value={breed}>{breed}</option> )}
        </select>
        )
}
export default BreedsSelect;