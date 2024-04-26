import { useState } from 'react'
import './App.css'

function Laskuri() {

    // Komponentin State = nimeltään luku
    //setLuku funktiolla voidaan asettaa luku state
    const [Luku, SetLuku] = useState (0)
    const [Show, SetShow] = useState(false)

  return (
    <>
        {!Show && <button onClick={() => SetShow(true)}>Näytä Laskuri</button>}
        {Show && <button onClick={() => SetShow(false)}>Piilota Laskuri</button>}

        {Show && <h2>{Luku}</h2>}
        {Show && <button onClick={() => SetLuku(Luku + 1)}> + </button>}
        {Show && <button onClick={() => SetLuku(Luku - 1)}> - </button>}
        {Show && <button onClick={() => SetLuku(0)}> Reset </button>}
    </>
  )
}

export default Laskuri