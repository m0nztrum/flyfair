import { ChangeEvent } from 'react';

type InputFieldProps = {
    name: string;
    inputtype: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({
    name,
    inputtype,
    placeholder,
    value,
    onChange,
}: InputFieldProps) => {
    return (
        <input
            type={inputtype}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mb-2 w-full rounded-xl border border-black p-4"
        />
    );
};
