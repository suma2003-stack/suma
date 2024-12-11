$(document).ready(function () {
    $('#biodata-form').on('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const name = $('#name').val();
        const dob = $('#dob').val();
        const nationality = $('#nationality').val();
        const hobbies = $('#hobbies').val();

        // Display the values
        $('#display-name').text(name);
        $('#display-dob').text(dob);
        $('#display-nationality').text(nationality);
        $('#display-hobbies').text(hobbies);

        // Clear the form
        this.reset();
    });
});