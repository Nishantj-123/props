// import React from 'react'

// const Parent = ({name, steady}) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{steady}</p>
//     </div>
//   )
// }

import React from "react"
import GrandParent from "./GrandParent";

const Parent = ({name, Study, address, pincode})=> {
  return(
    <>
    <GrandParent Message="Where are you" />
    <p>{name}</p>
    <p>{Study}</p>
    <p>{address}</p>
    <p>{pincode}</p>
    </>
  )
}
export default Parent;
