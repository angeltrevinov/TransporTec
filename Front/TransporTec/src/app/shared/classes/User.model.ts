//======================================================================================================================
export class UserModel {

    constructor(

        private strId: string,
        private strNombre: string,
        private strGenre: string,
        private intAge: number,
        private strEmail: string,
        private boolPagado: boolean,
        private strCareer: string,
        private strType: string

    ) {

    }

    static fromJSON(data: any) {
        new UserModel(
            data._id,
            data.strNombre,
            data.strSexo,
            data.intEdad,
            data.strCorreo,
            data.strPagado,
            data.strCarrera,
            data.strTipo
        );
    }

}
//======================================================================================================================
