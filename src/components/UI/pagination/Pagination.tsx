import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

interface Props {
    totalPages: number;
    setPage: (page: number) => void;
    page: number;
}

const Pagination = ({totalPages, setPage, page}: Props) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span onClick={() => setPage(p)}
                      key={p} className={p === page ? 'page page_current' : 'page'}>
                    {p}
                    </span>)}
        </div>
    );
};

export default Pagination;