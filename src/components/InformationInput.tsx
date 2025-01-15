import { useState } from "react";
import { getCookie, setCookie } from "./CookieStore";

export default function InformationInput() {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const [cookieValue, setCookieValue] = useState<string[]>([]);

  const handleClickSet = () => {
    console.log(name, value);
    setCookie(name, value, {
      path: "/",
      secure: true,
    });
    setCookieValue(cookieValue.concat(getCookie(name)));
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
      <br />
      <button onClick={handleClickSet}>저장</button>
      {cookieValue.map((value, index) => {
        return <h1 key={index}>{`${index}번 ${value}`}</h1>;
      })}
    </>
  );
}
