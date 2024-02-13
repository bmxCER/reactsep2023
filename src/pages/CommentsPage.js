import {Outlet} from "react-router-dom";

import css from "./CommentsPage.module.css"

const CommentsPage = () => {
    return (
        <div className={'commentsPage'}>
            <CommentsPage/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};