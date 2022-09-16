
import React from "react"
import { boxes } from "../boxes"



export const Box = function(props) {

    const [onProperty, setOnProperty] = React.useState(props.on)

    const invertOnProperty = () => {
        setOnProperty(onProperty => !onProperty)
    }



    // just like we can add inline styles to the HTML directly, we can add a style directly to the JSX as a property of the html tag
    // this is called dynamic styles
    // the reason we would do this is because we can change the style of something dynamically depending on a certain condition
    // we need a styles object, the key-value pairs represent CSS styles (they need to be camelCase)
    const stylesObject = {
        backgroundColor: onProperty ? "#222" : "white"
    }

    return (
        <div className="box" style={stylesObject} onClick={invertOnProperty}></div>
    )
}