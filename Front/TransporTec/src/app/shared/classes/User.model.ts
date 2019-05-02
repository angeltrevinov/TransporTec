//======================================================================================================================
export class UserModel {

    constructor(

        private strId_Z: string,
        private strName_Z: string,
        private strGenre_Z: string,
        private intAge_Z: number,
        private strEmail_Z: string,
        private boolPaid_Z: boolean,
        private strCareer_Z: string,
        private strType_Z: string

    ) {

    }
    //------------------------------------------------------------------------------------------------------------------
    public get strId(): string { return this.strId_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get strName(): string { return this.strName_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get strGenre(): string { return this.strGenre_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get intAge(): number { return this.intAge_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get strEmail(): string { return this.strEmail_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get boolPaid(): boolean { return this.boolPaid_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get strCareer(): string { return this.strCareer_Z; }
    //------------------------------------------------------------------------------------------------------------------
    public get strType(): string { return this.strType_Z; }

    //------------------------------------------------------------------------------------------------------------------
    static fromJSON(data: any): UserModel {
        return new UserModel(
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
