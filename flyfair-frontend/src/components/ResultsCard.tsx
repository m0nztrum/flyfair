import { formatDuration } from '../utils/formatDuration';
import { formatTime } from '../utils/formatTime';

type Flight = {
    departTime: string;
    arriveTime: string;
    duration: string;
    airline: string;
    stops: number;
    price: string;
    currency: string;
    departIATACode: string;
    arriveIATACode: string;
};

type ResultsCardProps = {
    flight: Flight;
};

export const ResultsCard = ({ flight }: ResultsCardProps) => {
    return (
        <article className="mt-4 w-full justify-center text-black">
            <div className="w-full rounded-lg border bg-gray-50 p-5">
                {/* first line */}
                <div className="flex flex-col justify-between sm:flex-row">
                    <p className="text-lg font-medium">
                        {formatTime(flight.departTime)} -{' '}
                        {formatTime(flight.arriveTime)}
                    </p>
                    <p className="mt-2 text-sm sm:mt-0">
                        {flight.stops} Stop{flight.stops > 1 ? 's' : ''}
                    </p>
                    <p className="mt-2 text-sm sm:mt-0">
                        {formatDuration(flight.duration)}
                    </p>
                </div>
                {/* Second line */}
                <div className="mt-1 flex flex-col justify-between sm:flex-row">
                    <p>{flight.airline}</p>
                    <p>
                        {flight.departIATACode} - {flight.arriveIATACode}
                    </p>
                    <p className="font-light">
                        {flight.currency} {flight.price}
                    </p>
                </div>
            </div>
        </article>
    );
};
