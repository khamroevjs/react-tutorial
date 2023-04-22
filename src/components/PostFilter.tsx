import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {Filter} from "../App";

interface Props {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

const PostFilter = ({filter, setFilter}: Props) => {
    return (
        <div>
            <MyInput value={filter.query}
                     onChange={event => setFilter({...filter, query: event.target.value})}
                     placeholder="Поиск..."/>
            <MySelect defaultValue="Сортировка по"
                      value={filter.sort}
                      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                      options={[{value: 'title', children: 'По названию'},
                          {value: 'body', children: 'По описанию'}]}/>
        </div>
    );
};

export default PostFilter;