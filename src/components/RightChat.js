import React from 'react'
import "./components.css"

function RightChat({message, messageTime, deliveryStatus}) {
  return (
    <>
      <div className="rightChatcnt">
        <div className="rightChat__cnt">
          <p>{message}</p>
        </div>
        <div className="rightChat__cnt-delivery">
          <p>{messageTime}</p>
          {deliveryStatus}
        </div>
      </div>
    </>
  )
}

export default RightChat