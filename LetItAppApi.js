/**
 * Represents a LetItApp API client.
 * 
 * @class
 */
export class LetItAppApi {
	/**
	 * Creates an instance of LetItAppApi. 
	 * @param {string} apiKey - The API key for authentication.
	 */
	constructor(apiKey) {
		/**
		 * The API key for authentication.
		 * @member {string}
		 */
		this.apiKey = apiKey;

		/**
		 * The base URL of the LetItApp API.
		 * @member {string}
		 */
		this.apiUrl = "https://api.letitapp.com/api/v1/";
	}

	/**
	 * Sends an HTTP request to the LetItApp API.
	 * @async
	 * @function
	 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
	 * @param {string} endpoint - The API endpoint.
	 * @param {object} data - Data for POST or PUT requests.
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async sendRequest(method, endpoint, data = {}) {
		const url = this.apiUrl + endpoint;

		const headers = {
			"X-API-Key": this.apiKey,
			"Content-Type": "application/json",
		};

		const requestOptions = {
			method: method,
			headers: headers,
		};

		if (method === "POST" || method === "PUT") {
			requestOptions.body = JSON.stringify(data);
		}

		const response = await fetch(url, requestOptions);
		const responseData = await response.json();

		return {
			status: response.status,
			response: responseData,
		};
	}

	/**
	 * Creates or updates a notification using the LetItApp API.
	 * @async
	 * @function
	 * @param {Notification} notification - The notification to create or update.
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async createOrUpdateNotification(notification) {
		const data = notification.getData();
		return this.sendRequest("PUT", "update-or-create", data);
	}

	/**
	 * Deletes a notification using the LetItApp API.
	 * @async
	 * @function
	 * @param {number} id - The ID of the notification to delete.
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async deleteNotification(id) {
		return this.sendRequest("DELETE", `delete/${id}`);
	}

	/**
	 * Retrieves a notification by ID using the LetItApp API.
	 * @async
	 * @function
	 * @param {number} id - The ID of the notification to retrieve.
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async getNotification(id) {
		return this.sendRequest("GET", `show/${id}`);
	}

	/**
	 * Retrieves a list of notifications using the LetItApp API.
	 * @async
	 * @function
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async getList() {
		return this.sendRequest("GET", "list");
	}

	/**
	 * Sends a notification immediately using the LetItApp API.
	 * @async
	 * @function
	 * @param {number} id - The ID of the notification to send.
	 * @returns {Promise<object>} - The API response including status and data.
	 */
	async sendNotification(id) {
		return this.sendRequest("POST", `send/${id}`);
	}

	/**
	 * Gets the error message from the API response.
	 * @function
	 * @param {object} response - The API response.
	 * @returns {string|null} - The error message or null if no error.
	 */
	getErrorMessage(response) {
		return response.response.error || null;
	}

	/**
	 * Gets the status from the API response.
	 * @function
	 * @param {object} response - The API response.
	 * @returns {number} - The status from the response.
	 */
	getResponseStatus(response) {
		return response.status || 0;
	}
}
