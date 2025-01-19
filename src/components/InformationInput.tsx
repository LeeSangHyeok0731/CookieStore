import { useEffect, useState } from "react";
import { deleteCookie, getAllCookie, setCookie } from "./CookieStore";

export default function InformationInput() {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const [deleteName, setDeleteName] = useState<string>("");

  const [data, setData] = useState<[]>([]);

  const clearValue = () => {
    setName("");
    setValue("");
    setDeleteName("");
  };

  const handleClickSet = () => {
    setCookie(name, value, {
      path: "/",
      secure: true,
    });
    clearValue();
    setData(getAllCookie());
  };

  const handleClickDelete = () => {
    deleteCookie(deleteName);
    clearValue();
    setData(getAllCookie());
  };

  useEffect(() => {
    setData(getAllCookie());
  }, []);

  return (
    <>
      <input
        placeholder="key값을 입력해 주세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="값을 입력해 주세요"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <button onClick={handleClickSet}>저장</button>

      <br />
      <input
        placeholder="삭제할 key값을 입력해 주세요"
        value={deleteName}
        onChange={(e) => {
          setDeleteName(e.target.value);
        }}
      />
      <br />
      <button onClick={handleClickDelete}>삭제</button>

      {Object.entries(data).map(([key, value]) => (
        <h1 key={key}>
          key: {key}, value: {value}
        </h1>
      ))}
    </>
  );
}
