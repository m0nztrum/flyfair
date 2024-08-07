import { useState } from 'react';
import { InputField } from './InputField';
import { ResultsCard } from './ResultsCard';

export const SearchForm = () => {
    const [searching, setSearching] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [flightResults, setFlightResults] = useState([]);
    const [error, setError] = useState<string>('');
    const [formData, setFormData] = useState({
        departFrom: '',
        arriveAt: '',
        departDate: '',
        arriveDate: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasSearched(true);

        if (formData.departFrom === formData.arriveAt) {
            setError('Departure and destination cannot be the same');
            return;
        }
        setSearching(true);
        setError('');

        try {
            const response = await fetch('http://localhost:7000/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setFlightResults(data);
            } else {
                setFlightResults([]);
                console.error('Error fetching flight prices');
                setError('');
            }
        } catch (error: unknown) {
            console.error(`Error in handleSubmit: {error.message}`);
        } finally {
            setSearching(false);
        }
    };

    return (
        <div className="container mx-auto w-screen max-w-4xl px-4 py-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <InputField
                            name="departFrom"
                            inputtype="text"
                            placeholder="from"
                            value={formData.departFrom}
                            onChange={handleChange}
                        />
                        <InputField
                            name="arriveAt"
                            inputtype="text"
                            placeholder="to"
                            value={formData.arriveAt}
                            onChange={handleChange}
                        />
                        <InputField
                            name="departDate"
                            inputtype="date"
                            value={formData.departDate}
                            onChange={handleChange}
                        />
                        <InputField
                            name="departDate"
                            inputtype="date"
                            value={formData.arriveDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {searching ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="mt-4 text-center text-red-600" role="alert">
                        {error}
                    </div>
                )}
            </div>
            {/* Results display section */}
            <div>
                {searching ? (
                    <div className="p-4 text-center font-bold text-gray-700">
                        Loading...
                    </div>
                ) : hasSearched && flightResults.length === 0 ? (
                    <div className="p-4 text-center font-bold text-red-500">
                        No flights found
                    </div>
                ) : (
                    flightResults.map((flight, index) => (
                        <ResultsCard key={index} flight={flight} />
                    ))
                )}
            </div>
        </div>
    );
};
