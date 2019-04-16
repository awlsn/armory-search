import React from 'react'

function ItemProperties(props) {

    const { itemProps } = props;

    if (itemProps.length > 0) {

        return itemProps.map((propSet, i) => {
            let ps = [];
            //every other item in the set is a color - text, color, text, color, etc.
            for (let i = 0; i < propSet.length; i += 2) {
                ps.push({ color: propSet[i], text: propSet[i + 1] })
            }
            //the line is an assembly of these sets of 2
            let line = ps.map((prop, i) => <span key={i} className={'no-wrap diablo_' + prop.color}> {prop.text}</span>);

            return <span key={i} className="item-property">{line}</span>
        }
        );


    } else {
        return <p>Search to find items.</p>
    }

}

export default ItemProperties