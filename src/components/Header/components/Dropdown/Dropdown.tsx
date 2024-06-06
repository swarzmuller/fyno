import { useState, useRef, useEffect } from "react";
import { DROPDOWN_OPTIONS } from "@/constans";
import Arrow from "@/assets/arrow.svg?react";
import * as S from "../../styles";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div css={S.Dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} css={S.HeaderButton}>
        {selectedOption ? selectedOption : "Please select"}
        <Arrow css={S.Arrow} className={isOpen ? "open" : ""} />
      </button>
      {isOpen && (
        <ul css={S.DropdownMenu}>
          {DROPDOWN_OPTIONS.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
