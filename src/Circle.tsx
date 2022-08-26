import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string; // optional props('?'를 이용)
    text?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
    const [value, setValue] = useState<number | string>(0); // Typescript를 사용하지 않아도 default값으로 어떤 타입을 쓸건지 앎.
    setValue(2);
    setValue("hello");
    setValue(true) // 에러발생
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/> // borderColor가 undefined 일때 (??)
}

export default Circle;