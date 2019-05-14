//======================================================================================================================
export class TransporTecAPI {

    static yourIP: string = 'http://192.168.15.135' //Make sure to include your IP here
    static BaseURL: string = TransporTecAPI.yourIP + ':3000';
    static LogInURL: string = TransporTecAPI.BaseURL +
        '/authentication';
    static RutasURL: string = TransporTecAPI.BaseURL +
        '/rutas'
}
//======================================================================================================================
