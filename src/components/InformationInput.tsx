import { useState } from "react";
import { setCookie } from "./CookieStore";

export default function InformationInput() {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    setCookie(name, value);
  };

  return (
    <>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="값"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>저장</button>
    </>
  );
}
