import { useState } from 'react';
import { InputField } from './InputField';

export const SearchForm = () => {
    const [departFrom, setDepartFrom] = useState<string>('');
    const [arriveAt, setArriveAt] = useState<string>('');
    const [departDate, setDepartDate] = useState<string>('');
    const [arriveDate, setArriveDate] = useState<string>('');

    return (
        <div className="mx-auto w-screen px-4">
            <div className="rounded-lg bg-white p-6 opacity-85">
                <form>
                    <div className="flex justify-center space-x-4">
                        <InputField
                            inputtype="text"
                            placeholder="from"
                            value={departFrom}
                            onChange={(e) => setDepartFrom(e.target.value)}
                        />
                        <InputField
                            inputtype="text"
                            placeholder="to"
                            value={arriveAt}
                            onChange={(e) => setArriveAt(e.target.value)}
                        />
                        <InputField
                            inputtype="date"
                            placeholder="Departure"
                            value={departDate}
                            onChange={(e) => setDepartDate(e.target.value)}
                        />
                        <InputField
                            inputtype="date"
                            placeholder="Departure"
                            value={arriveDate}
                            onChange={(e) => setArriveDate(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-lg bg-gray-500 px-6 py-2 font-semibold"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
