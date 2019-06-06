//======================================================================================================================
export class TransporTecAPI {

    static yourIP: string = 'http://' //Make sure to include your IP here
    static BaseURL: string = TransporTecAPI.yourIP + ':3000';
    static LogInURL: string = TransporTecAPI.BaseURL +
        '/authentication';
    static RutasURL: string = TransporTecAPI.BaseURL +
        '/rutas'
    static TicketsURL: string = TransporTecAPI.BaseURL +
        '/usuario/tickets'
}
//======================================================================================================================
