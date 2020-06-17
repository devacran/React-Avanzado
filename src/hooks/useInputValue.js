import React, { useState } from 'react'

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = evn => setValue(evn.target.value)
  return { value, onChange }
}
