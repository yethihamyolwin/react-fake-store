import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <button
      className={`${
        current && "bg-black text-white"
      } border broder-black text-nowrap px-4 py-2 me-2`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
