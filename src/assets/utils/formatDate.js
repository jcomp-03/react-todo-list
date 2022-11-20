export default function convertToDateString (dateStr) {
    let array = dateStr.split('-');
    let year = array.shift();
    array.push(year);
    return new Date(array.join('-')).toDateString();
}
