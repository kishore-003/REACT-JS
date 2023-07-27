import React from 'react'

function Header(props) {
  return (
    <div style = {
        {
            backgroundColor:"rgb(4,85,144)",
            color:"white",
            padding:10
        }
    }>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Header