var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/photos')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/photos/:photoId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/groups', api.listaGrupos);
    app.get('/v1/photos/group/:groupId', api.listaPorGrupo);
};