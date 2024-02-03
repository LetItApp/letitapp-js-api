import LetItAppAPI from '../src/letitapp-api.js';

// Example Usage
const apiKey = 'API KEY';
const letItAppAPI = new LetItAppAPI(apiKey);

// Creating a notification instance and setting its properties
const notification = {
    header: 'Notification Header',
    description: 'Notification Description',
    url: 'https://example.com',
    time: '12:00:00',
    date: '2024-01-28',
    lang: 'cs',
    id: false,
};

// Sending the notification
const response = letItAppAPI.createOrUpdateNotification(notification);
console.log("Response for creating/updating a notification:");
console.log(response);

// Getting error information if an error occurred
if (letItAppAPI.getResponseStatus(response) !== 201 && letItAppAPI.getResponseStatus(response) !== 202) {
    const errorMessage = letItAppAPI.getErrorMessage(response);
    console.log(`Error while creating or updating a notification: ${errorMessage}`);
}

// Retrieving the list of notifications
const responseList = letItAppAPI.getList();
console.log("\nResponse for retrieving the list of notifications:");
console.log(responseList);

// Retrieving the details of a notification
const notificationId = 1; // Replace with the actual notification ID
const responseDetail = letItAppAPI.getNotification(notificationId);
console.log(`\nResponse for retrieving the details of the notification with ID ${notificationId}:`);
console.log(responseDetail);

// Deleting a notification
const responseDelete = letItAppAPI.deleteNotification(notificationId);
console.log(`\nResponse for deleting the notification with ID ${notificationId}:`);
console.log(responseDelete);

// Sending a notification
const responseSend = letItAppAPI.sendNotification(notificationId);
console.log(`\nResponse for sending the notification with ID ${notificationId}:`);
console.log(responseSend);
