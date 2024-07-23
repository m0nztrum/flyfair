export function timeDateFormat(apiDateString: string): string {
    const match = apiDateString.match(
        /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/,
    );

    if (!match) {
        throw new Error('Invalid date string format');
    }

    const [, , month, day, hours, minutes] = match;

    return `${day}/${month} ${hours}:${minutes}`;
}
