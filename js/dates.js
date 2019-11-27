$(document).ready(function() {
	let date = new Date()

	let month = date.getMonth()
	let monthOfYear = ''
	if (month === 0) {
		monthOfYear = 'January'
	} else if (month === 1) {
		monthOfYear = 'February'
	} else if (month === 2) {
		monthOfYear = 'March'
	} else if (month === 3) {
		monthOfYear = 'April'
	} else if (month === 4) {
		monthOfYear = 'May'
	} else if (month === 5) {
		monthOfYear = 'June'
	} else if (month === 6) {
		monthOfYear = 'July'
	} else if (month === 7) {
		monthOfYear = 'August'
	} else if (month === 8) {
		monthOfYear = 'September'
	} else if (month === 9) {
		monthOfYear = 'October'
	} else if (month === 10) {
		monthOfYear = 'November'
	} else if (month === 11) {
		monthOfYear = 'December'
	}

	let dayOfMonth = date.getDate()

	let year = date.getFullYear()

	let dates = `<p>&copy; ${year} Wish I Was There &nbsp;|&nbsp; Last Modified: ${monthOfYear} ${dayOfMonth}, ${year}</p>`
	$('#dates').html(dates)
})