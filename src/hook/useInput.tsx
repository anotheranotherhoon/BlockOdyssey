import React, {useState } from "react"
import {RouterInfo} from "../utils/RouterInfo"

export const useInput = () => {
  const {q} = RouterInfo()
  const [value, setValue] = useState(
    q==="default" ? "" : q
  )
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return{
    value,
    handleInputChange
  }
}
