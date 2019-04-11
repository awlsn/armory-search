import React from 'react'

function SimpleProperties(props) {
    const { itemProps, color } = props
    //console.log(itemProps);
    if (itemProps.length > 0) {
        let runeProps = itemProps.map((itemPropSet) =>
            (<span className="item-property">
                <div className={"no-wrap diablo_" + color}>{itemPropSet}</div>
            </span>)
        )
        return (runeProps)
    } else {
        return "";
    }
}

export default SimpleProperties;