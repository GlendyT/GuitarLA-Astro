import React, { useState} from 'react'

export default function ComponenteReact() {
    const [cliente, setCliente] = useState(".")

    console.log("Solo cliente")
  return (
    <div>{cliente}</div>
  )
}
