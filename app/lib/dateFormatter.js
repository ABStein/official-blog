const dateFormatter = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formattedDate;
}

export default dateFormatter;
