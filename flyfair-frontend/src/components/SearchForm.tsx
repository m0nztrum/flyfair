import { useState } from 'react';
import { InputField } from './InputField';
import { ResultsCard } from './ResultsCard';

export const SearchForm = () => {
    const [departFrom, setDepartFrom] = useState<string>('');
    const [arriveAt, setArriveAt] = useState<string>('');
    const [departDate, setDepartDate] = useState<string>('');
    const [arriveDate, setArriveDate] = useState<string>('');
    const [searching, setSearching] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [flightResults, setFlightResults] = useState([]);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setHasSearched(true);

        if (departFrom === arriveAt) {
            setError('Departure and destination cannot be the same');
            return;
        }
        setSearching(true);
        setError('');

        try {
            const response = await fetch(
                'https://flyfare.onrender.com/search',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        departFrom,
                        arriveAt,
                        departDate,
                        arriveDate,
                    }),
                },
            );

            if (response.ok) {
                const data = await response.json();
                setFlightResults(data);
            } else {
                setFlightResults([]);
                console.error('Error fetching flight prices');
                setError('');
            }
        } catch (error) {
            console.error('Error in handleSubmit: ', error.message);
        } finally {
            setSearching(false);
        }
    };

    return (
        <div className="mx-auto w-screen px-4">
            <div className="rounded-lg bg-white p-6 opacity-85">
                <form onSubmit={handleSubmit}>
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
                            {searching ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="mt-4 text-center text-red-600">{error}</div>
                )}
            </div>
            {/* Results display section */}
            <div>
                {searching ? (
                    <div className="p-2 text-center font-bold text-white">
                        Loading...
                    </div>
                ) : hasSearched && flightResults.length === 0 ? (
                    <div className="text-center font-extrabold text-red-500">
                        No flights found
                    </div>
                ) : (
                    flightResults.map((flight, index) => (
                        <ResultsCard key={index} flights={flight} />
                    ))
                )}
            </div>
        </div>
    );
};
