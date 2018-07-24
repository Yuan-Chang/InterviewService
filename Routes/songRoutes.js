

module.exports = app => {

    app.get('/albums', function(req, res){
        console.log(req.query);

        var albums = [];

        var fullList = getFullAlbumList();

        var query = req.query;
        var start = query.start < 0? 0:query.start;
        var limit = query.limit;
        var end = (+start + +limit) < fullList.length ? (+start + +limit) : fullList.length;

        for(var i=start; i< end; i++)
        {
            albums.push(fullList[i]);
        }

        res.send(JSON.stringify(albums));
    });

    app.get('/songs/', function(req, res){
        console.log(req.query);

        var songs = [];

        var query = req.query;
        var albumID = query.id;
        var albumFullList = getFullAlbumList();

        var fullList = getFullSongList(albumFullList[albumID].name);
        res.send(JSON.stringify(fullList));
    });
}

function getFullAlbumList() {

    var list = [];

    for(var i = 0; i<1000; i++)
    {
        var album = {
            id:i,
            name:"Album-"+i
        };
        list.push(album);
    }

    return list;
}

function getFullSongList(albumName) {

    var list = [];
    // var count = Math.floor((Math.random() * 20) + 1);
    var count = 10;

    for(var i = 0; i<count; i++)
    {
        var song = {
            id:i,
            name:albumName+"-> song-"+i
        };
        list.push(song);
    }

    return list;
}