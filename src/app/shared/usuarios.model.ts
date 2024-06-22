// usuarios.model.ts

export class UsuariosModel {
    constructor(
        public idusuarios: string,
        public usu_nombre: string,
        public usu_tipoid: string,
        public usu_identificacion: string,
        public usu_numerotel: string,
        public usu_correo: string,
        public usu_contrasena: string,
        public usu_estado: string,
        public idgenero: string,
        public idroles: string,
        public sexo_tipo: string,
        public rol_nombre: string,
        public agree_terms: boolean
    ) { }
}
