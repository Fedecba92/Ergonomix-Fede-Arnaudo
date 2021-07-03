import React from "react";
import { useHistory } from "react-router-dom";

export default function CategoryMenu() {
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.value) history.push(`/category/${e.target.value}`);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select category</option>
        <option value="chairs">chairs</option>
        <option value="accesories">accesories</option>
        <option value="keyboards">keyboards</option>
      </select>
    </div>
  );
}
