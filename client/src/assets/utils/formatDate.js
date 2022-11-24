export default function styleDateAsRequired (dateStr) {
    return new Date(dateStr).toUTCString().split(' ').slice(1,3).join(', ');
}