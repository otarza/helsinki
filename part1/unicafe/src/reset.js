import React, { useState } from "react";

const Reset = () => {
  const [value, setValue] = useState(10);

  const handleClick = () => setValue(0);
  return (
    <div>
      {value}
      <button onClick={() => setValue(0)}> Reset the value </button>
    </div>
  );
};

export default Reset;
