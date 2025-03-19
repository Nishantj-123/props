import React from 'react'
import Parent from './Parent'

const Child = () => {
  return (
    <div>
      <Parent name="Nishant" Study="B.C.A" address="faridabad" pincode='121004' />
      
  
      {/* <Parent name="Vijay" />
      <Parent study="B.C.A"/>
      <Parent address="faridabad"/> */}
    </div>
  )
}

export default Child;
