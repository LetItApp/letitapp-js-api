import Notification from './Notification';

export declare class LetItAppAPI {
    apiKey: string;
    apiUrl: string;

    constructor(apiKey: string);

    sendRequest(method: string, endpoint: string, data?: Record<string, unknown>): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    createOrUpdateNotification(notification: Notification): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    deleteNotification(id: number): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    getNotification(id: number): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    getList(): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    sendNotification(id: number): Promise<{
        status: number;
        response: Record<string, unknown>;
    }>;

    getErrorMessage(response: {
        response: {
            error: string;
        };
    }): string | null;

    getResponseStatus(response: {
        status: number;
    }): number;
}