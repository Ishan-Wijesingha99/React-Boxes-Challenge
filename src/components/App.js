
import React from "react"
import { boxes } from "../boxes"


export const App = function(props) {
    // just like we can add inline styles to the HTML directly, we can add a style directly to the JSX as a property of the html tag
    // this is called dynamic styles
    // the reason we would do this is because we can change the style of something dynamically depending on a certain condition
    // we need a styles object, the key-value pairs represent CSS styles (they need to be camelCase)
    const stylesObject = {
        backgroundColor: props.blueMode ? "blue" : "white"
    }


    
    const [boxArray, setBoxes] = React.useState(boxes)

    const jsxArray = boxArray.map(object => {
        return <div className="empty-square" style={stylesObject} key={object.id}>{object.id}</div>
    })

    return (
    <main>
        <h1>{jsxArray}</h1>
    </main>
    )
}




