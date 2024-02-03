/**
 * Represents a Notification object.
 * @class
 */
export class Notification {
    constructor() {
        this.header = '';
        this.description = '';
        this.url = '';
        this.time = '';
        this.date = '';
        this.lang = '';
        this.id = 0;
    }

    /**
     * Setter
     * @function
     * @param {string} header - The header of the notification.
     * @returns {Notification} - The Notification object.
     */
    setHeader(header) {
        this.header = header;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {string} description - The description of the notification.
     * @returns {Notification} - The Notification object.
     */
    setDescription(description) {
        this.description = description;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {string} url - The URL of the notification.
     * @returns {Notification} - The Notification object.
     */
    setUrl(url) {
        this.url = url;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {string} time - The time of the notification.
     * @returns {Notification} - The Notification object.
     */
    setTime(time) {
        this.time = time;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {string} date - The date of the notification.
     * @returns {Notification} - The Notification object.
     */
    setDate(date) {
        this.date = date;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {string} lang - The language of the notification.
     * @returns {Notification} - The Notification object.
     */
    setLang(lang) {
        this.lang = lang;
        return this;
    }

    /**
     * Setter
     * @function
     * @param {number} id - The ID of the notification.
     * @returns {Notification} - The Notification object.
     */
    setId(id) {
        this.id = id;
        return this;
    }

    /**
     * Setter
     * @function
     * @returns {object} - The JSON data payload of the notification.
     */
    getData() {
        return {
            header: this.header,
            description: this.description,
            url: this.url,
            time: this.time,
            date: this.date,
            lang: this.lang,
            id: this.id,
        };
    }
}
