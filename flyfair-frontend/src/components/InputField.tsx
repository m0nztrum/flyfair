import { ChangeEvent } from 'react';

type InputFieldProps = {
    inputtype: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({
    inputtype,
    placeholder,
    value,
    onChange,
}: InputFieldProps) => {
    return (
        <input
            type={inputtype}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mb-2 w-full rounded-xl border border-black p-4"
        />
    );
};
