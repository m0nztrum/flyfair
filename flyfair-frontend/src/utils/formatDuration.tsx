export function formatDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);

    if (!match) {
        throw new Error('Invalid duration format');
    }

    const [, hours = '0', minutes = '0'] = match;
    return `${hours}hrs ${minutes}m`;
}
