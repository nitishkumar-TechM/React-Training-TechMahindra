let count = 0;

const Message = () => {
    count++;

    return (
        <div>
            <h3>Hello World, count: {count}</h3>
        </div>
    )
}

export default Message;