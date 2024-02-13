const Todo = ({todo}) => {
    const {id, title, competed} = todo
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>competed: {competed}</div>
        </div>
    );
};

export {Todo};