export class TransporTecAPI {

    static yourIP: string = '' //Make sure to include your IP here
    static BaseURL: string = TransporTecAPI.yourIP + ':3000';
    static LogInURL: string = TransporTecAPI.BaseURL +
        '/authentication';
}
