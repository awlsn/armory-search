import React from 'react'

function SimpleProperties(props) {
    const { itemProps } = props
    //console.log(itemProps);
    if (itemProps.length > 0) {
        let runeProps = itemProps.map((itemPropSet, i) =>
            (<span key={i} className="item-property">
                <span className='no-wrap diablo_blue'>{itemPropSet}</span>
            </span>)
        )
        return (runeProps)
    } else {
        return "";
    }
}

export default SimpleProperties;