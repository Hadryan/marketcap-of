import React from "react";
const DropdownSelected = ({
  selectDonationCoin,
  setShowDropDown,
  showDropdown,
}) => {
  const handleClick = () => {
    setShowDropDown((showDropdown) => !showDropdown);
  };
  return (
    <div>
      <h1 onClick={handleClick}>{selectDonationCoin.name}</h1>
    </div>
  );
};
export default DropdownSelected;
