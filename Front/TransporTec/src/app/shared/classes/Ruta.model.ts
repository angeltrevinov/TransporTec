import {ParadaModel} from "~/app/shared/classes/Parada.model";

export class RutaModel {

    constructor(
        private strId_Z: string,
        private strName_Z: string,
        private intHoraInic_Z: number,
        private intHoraFin_Z: number,
        private arrParadas_Z: ParadaModel[]
    ) {

    }

    public get strId(): string { return this.strId_Z; }
    public get strName(): string { return this.strName_Z; }
    public get intHoraInic(): number { return this.intHoraInic_Z; }
    public get intHoraFin(): number { return this.intHoraFin_Z; }
    public get arrParadas(): ParadaModel[] { return this.arrParadas_Z;  }

    static fromJSON(data: any): RutaModel {
        return new RutaModel(
            data._id,
            data.strNombre,
            data.intHoraInic,
            data.intHoraFin,
            ParadaModel.fromJSONARRAY(data.arrParadas)
        );
    }
}
