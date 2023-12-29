import { useEffect, useState } from 'react'
import './App.css'
import toBaseX from './functions/toBaseX'

function App() {
  const [id, setId] = useState(`0000`)
  const [target, setTarget] = useState(`0`)
  const [digitsToUsed, setDigitsToUsed] = useState(`0000`)

  useEffect(() => {
    const res = toBaseX(id, 36)
    setDigitsToUsed(res.slice(0,4))
    setTarget(res.slice(-2).replace(/^0/g,``))
  }, [id])
  return (
    <>
      <input type="text" maxLength={4} value={id} onChange={(e) => {
        setId(e.currentTarget.value)
      }} 
      style={{textAlign: `center`}}
      />
      <hr />
      <div className="" style={{display: `flex`, flexFlow: `column`, justifyContent: `center`}}>
        <table border={1} style={{borderCollapse: `collapse`}}>
          <tbody>
            <tr style={{width: `100%`}}>
              {digitsToUsed && digitsToUsed.split("").map((digit, index) => {
                return <td key={index} style={{padding: `5px 10px`, fontWeight: `bold`}}>
                {digit}
                </td>
              })}
            </tr>
            </tbody>
        </table>
        <h3>
          Target: {target}
        </h3>
      </div>
    </>
  )
}

export default App
