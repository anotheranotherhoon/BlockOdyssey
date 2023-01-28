import React from "react";
import styles from './DropDown.module.scss'
import type { DropDownProps } from '../../types/interfaces'

const DropDown = ({ isDropDownShow, selectedName, handleDropDown, handleCurrentIndex, list }: DropDownProps) => {
  return (
    <div className={styles.wrapper}>
      <button type='button' className={styles.dropdown} onClick={handleDropDown}>
        <span>{selectedName}</span>
      </button>
      {isDropDownShow && (
        <ul className={styles.styleul}>
          {
            list.map((filter) => (
              <li key={filter.id}>
                <button type="button" onClick={(e) => handleCurrentIndex(e)} value={filter.status} className={styles.dropdown}>
                  {filter.name}
                </button>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default DropDown