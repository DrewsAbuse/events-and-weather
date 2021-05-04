import React from 'react'

function DropSelect({ itemsArr, selectValue, setSelectValue }) {
  const handleChange = (event) => {
    setSelectValue(event.target.value)
  }
  return (
    <select defaultValue={itemsArr[0]} onChange={handleChange}>
      {itemsArr.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
export { DropSelect }
