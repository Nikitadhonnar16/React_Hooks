import React, { memo } from 'react'

const Child = ({countTwo,count2}) => {
    console.log("...Child Class")
  return (
    <div>

            <h3>I am from Child Component</h3>
      
    </div>
  )
}

export default memo( Child)
