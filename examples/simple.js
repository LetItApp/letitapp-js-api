import { LetItAppApi, Notification } from '../index.js';

// Example Usage
const apiKey = 'API_KEY'; // Replace with the actual API key
const letItAppAPI = new LetItAppApi(apiKey);

// Creating a notification instance and setting its properties
const notification = new Notification();
notification.setHeader('Notification Header').
	setDescription('Notification Description').
	setUrl('https://example.com').
	setTime('12:00:00').
	setDate('2024-01-28').
	setLang('cs').
	setId(false);

// Sending the notification
const response = await letItAppAPI.createOrUpdateNotification(notification);
console.log("Response for creating/updating a notification:");
console.log(response);

// Getting error information if an error occurred
if (letItAppAPI.getResponseStatus(response) !== 201 && letItAppAPI.getResponseStatus(response) !== 202) {
    const errorMessage = letItAppAPI.getErrorMessage(response);
    console.log(`Error while creating or updating a notification: ${errorMessage}`);
}

// Retrieving the list of notifications
const responseList = await letItAppAPI.getList();
console.log("\nResponse for retrieving the list of notifications:");
console.log(JSON.stringify(responseList));

// Retrieving the details of a notification
const notificationId = 1; // Replace with the actual notification ID
const responseDetail = await letItAppAPI.getNotification(notificationId);
console.log(`\nResponse for retrieving the details of the notification with ID ${notificationId}:`);
console.log(responseDetail);

// Deleting a notification
const responseDelete = await letItAppAPI.deleteNotification(notificationId);
console.log(`\nResponse for deleting the notification with ID ${notificationId}:`);
console.log(responseDelete);

// Sending a notification
const responseSend = await letItAppAPI.sendNotification(notificationId);
console.log(`\nResponse for sending the notification with ID ${notificationId}:`);
console.log(responseSend);
