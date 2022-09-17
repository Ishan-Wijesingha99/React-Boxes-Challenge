
import React from "react"
import { boxes } from "../boxes"
import { Box } from "./Box"



export const App = function(props) {
    const [boxArray, setBoxArray] = React.useState(boxes)
    
    

    // toggleColour function
    const toggleColour = function(boxId) {

        setBoxArray(prevBoxArray => {

            return prevBoxArray.map(element => {
                
                if(element.id === boxId) {
                    return {
                        ...element,
                        on: !element.on
                    }
                } else {
                    return element
                }

            })

        })
    }



    const jsxArray = boxArray.map(object => {
        return ( 
        <Box 
        key={object.id} 
        on={object.on} 
        toggleColour={toggleColour} 
        boxId={object.id}
        />
        )
    })

    return (
        <main>
            <h1>{jsxArray}</h1>
        </main>
    )
}




