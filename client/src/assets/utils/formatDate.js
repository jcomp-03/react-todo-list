export default function styleDateAsRequired (dateStr) {
    return new Date(dateStr).toDateString().split(' ').slice(1,3).reverse().join(', ');
}