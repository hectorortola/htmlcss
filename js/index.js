// Function to update every second current datetime
function updateDateTime() {

    // Create date and format
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Result setted to span#datetime
    const formattedDate = `[${day} ${month} ${date} ${year}]`;

    document.querySelector('#datetime').textContent = formattedDate;
}

// run it every second
setInterval(updateDateTime, 1000);