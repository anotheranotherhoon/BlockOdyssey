import React from "react";
import styles from './DropDown.module.scss'
import type { DropDownType } from '../../types/interfaces'

interface DropDownProps {
  isDropDownShow: boolean;
  selectedName: string | null;
  selectedStatus: string | null;
  handleDropDown: () => void;
  handleCurrentIndex: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  list: DropDownType[]
}

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