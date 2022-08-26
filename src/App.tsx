import React, { HtmlHTMLAttributes, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  // 'any'타입은 모든 타입이 가능하지만, 안쓰는게 좋음!
  // 이벤트 인자타입을 지정하러면 이벤트의 타입을 찾고, 해당 이벤트를 발생시키는 요소를 제네릭 인자로 전달
  const onChange = (event: React.FormEvent<HTMLInputElement>) => { 
    // console.log(event.currentTarget.value);
    const {
      currentTarget: {value},
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    console.log("hello", value)
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
