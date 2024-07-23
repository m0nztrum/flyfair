export function formatTime(apiDateString: string): string {
    const match = apiDateString.match(/(\d{2}):(\d{2})/);

    if (!match) {
        throw new Error('Invalid date string format');
    }

    const [, hours, minutes] = match;

    return `${hours}:${minutes}`;
}
