import { formatDuration } from '../utils/formatDuration';
import { formatTime } from '../utils/formatTime';

type Flight = {
    departTime: string;
    arriveTime: string;
    duration: string;
    airline: string;
};

type FlightResultProps = {
    flights: Flight[];
};

export const ResultsCard = ({ flights }: FlightResultProps) => {
    return (
        <div className="mt-4 flex h-full justify-center">
            <div className="rounded-lg border p-5 shadow-lg">
                {/* first line */}
                <div>
                    <p className="text-lg font-medium">
                        {formatTime(flights.departTime)} -{' '}
                        {formatTime(flights.arriveTime)}
                    </p>
                    <p className="mt-2 text-sm sm:mt-0">
                        {formatDuration(flights.duration)}
                    </p>
                </div>
                {/* Second line */}
                <div>
                    <p>{flights.airline}</p>
                </div>
            </div>
        </div>
    );
};
