export class ParadaModel {

    constructor(
        private strId_Z: string,
        private decLon_Z: number,
        private decLac_Z: number,
        private intMin_Z: number,
        private strName_Z: string
    ) {

    }

    public get strId(): string { return this.strId_Z; }
    public get decLon(): number { return this.decLon_Z; }
    public get decLac(): number { return this.decLac_Z; }
    public get intMin(): number { return this.intMin_Z; }
    public get strName(): string { return this.strName_Z; }

    static fromJSON(data: any): ParadaModel {
        return new ParadaModel(
            data.id,
            data.decLon,
            data.decLat,
            data.intMin,
            data.strNombreP
        );
    }

    static fromJSONARRAY(dataArray: any): ParadaModel[] {
        let arrParadas: ParadaModel [] = [];

        for(let data of dataArray ) {
            arrParadas.push(this.fromJSON(data));
        }

        return arrParadas;
    }
}
