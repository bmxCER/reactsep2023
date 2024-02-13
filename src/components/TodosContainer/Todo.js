const Todo = ({todo}) => {
    const {id, title, completed} = todo
    console.log(todo);
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>competed: {String(completed)}</div>
        </div>
    );
};

export {Todo};