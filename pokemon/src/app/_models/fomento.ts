export class FomentoUsersModel {
id: number;
samAccountName: string;
password: string;
email: string;
nombre: string;
nombre2: any;
paterno: string;
materno: string;
role: string;
fomentoOficinaMinera: FomentoOficinaMineraModel;
fomentoUsuarioOficinas: FomentoUsuarioOficinaModel[];
token: any;
estado: boolean;
lastLogin: Date;
creado: Date;
editado: Date;
}
export class FomentoOficinaMineraModel {
    id: number;
    nombre: string;
    nombreCorto: string;
    descripcion: string;
    codigoEnami: number;
    zonaMinera: string;
    tipoZona: string;
    idUnidadSigPlus: number;
    estado: boolean;

}
export class FomentoUsuarioOficinaModel {
    id: number;
    fomentoOficinaMinera: FomentoOficinaMineraModel;
    estado: boolean;
}
export class FomentoUsuarioModel {
    id: number;
    samAccountName: string;
    password: string;
    email: string;
    nombre: string;
    nombre2: any;
    paterno: string;
    materno: string;
    role: string;
    fomentoOficinaMinera: FomentoOficinaMineraModel;
    fomentoUsuarioOficinas: FomentoUsuarioOficinaModel[];
    token: any;
    estado: boolean;
    lastLogin: Date;
    creado: Date;
    editado: Date;
}
// http://192.168.111.66:7778/Api/c/Estados
export class FomentoTipoEstadosModel {

    id: number;
    nombre: string;
    nombreCorto: string;
    descripcion: string;
    estado: boolean;
}
// http://192.168.111.66:7778/Api/c/Instrumentos
export class FomentoTipoInstrumentosModel {
    id: number;
    nombre: string;
    nombreCorto: string;
    descripcion: string;
    estado: boolean;
}
// http://192.168.111.66:7778/Api/c/Lineamientos
export class FomentoTipoLineamientosModel {
    id: number;
    nombre: string;
    nombreCorto: string;
    descripcion: string;
    estado: boolean;
}
// http://192.168.111.66:7778/Api/c/Reportes
export class FomentoTipoReportesModel {
    id: number;
    nombre: string;
    nombreCorto: string;
    descripcion: string;
    estado: boolean;
}



export interface FomentoEmpadronadosModel {
    id: number;
    productor?: string;
    productorRut?: string;
    faena?: string;
    faenaCod?: number;
    padron?: number;
    idrutprocfaena?: string;
    mes?: number;
    year?: number;
    fechaSolicitud?: Date;
    fechaOtorgamiento?: Date;
    fechaVencimiento?: Date;
    oFicina?: string;
    tipoPadron?: string;
    genero?: string;
    nuevo?: string;
    resPe?: string;
    fechaPe?: any;
    duraPe?: string;
    zona?: string;
}
export class FomentoFormularioDiarioModel {

    id: number;
    fecha?: Date;
    rut?: string;
    productor?: string;
    faena: string;
    fomentoUsuario: FomentoUsuarioModel;
    fomentoEmpadronado: FomentoEmpadronadosModel;
    fomentoOficinaMinera: FomentoOficinaMineraModel;
    fomentoTipoReporte: FomentoTipoReportesModel;
    fomentoTipoLineamiento: FomentoTipoLineamientosModel;
    fomentoTipoInstrumento: FomentoTipoInstrumentosModel;
    fomentoTipoEstado: FomentoTipoEstadosModel;
    hora?: number;
    desarrolloUObservacion?: string;
    fechaCreacion?: Date;
    fechaEdicion?: any;
    estadoFormulario: boolean;

}



