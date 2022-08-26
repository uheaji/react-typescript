import { useParams } from "react-router-dom";

interface RouteParams {
    coinId: string;
}


function Coin() {
    // useParams() : url에서 관심있어하는 정보를 잡아낼 수 있게 해준다.
    const { coinId } = useParams<RouteParams>();
    return <h1>Coin: {coinId} </h1>
}

export default Coin;