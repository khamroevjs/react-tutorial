import React, {Key, OptionHTMLAttributes} from 'react';

interface Props {
    options: React.ComponentProps<'option'>[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const MySelect = ({options, defaultValue, value, onChange}: Props) => {
    return (
        <select value={value}
                onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value as Key} value={option.value}>{option.children}</option>)}
        </select>
    );
};

export default MySelect;

//component that receives `option` as a prop