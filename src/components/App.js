
import React from "react"
import { boxes } from "../boxes"
import { Box } from "./Box"



export const App = function(props) {
    const [boxArray, setBoxes] = React.useState(boxes)



    const jsxArray = boxArray.map(object => {
        return <Box key={object.id} on={object.on}/>
    })

    return (
        <main>
            <h1>{jsxArray}</h1>
        </main>
    )
}




