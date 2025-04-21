import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status) return <div><FaHeart color="#ed2a18" size={20} onClick={toggle}/></div>

    return (
        <div><FaRegHeart size={20} onClick={toggle}/></div>
    )
}

export default Like;