// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14001e000101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010201010102010101020101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010201010102010101020101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010201010102010101020101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010201010102010101020101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010201010102010101020101010213010101010101010101010101010111010101011201010101010101010101010101010b0101010f0f010102010101020d0101020101010b0101010201010101010101010b0101010101010b0101010101010101010101010b0101010101010b1001010101010102010101020c0101020101010b010101020101010101010101010101010101010b01010101010101010101010101090e0e0a01010b010f01010101010201010102010101020101010b0101010f0101010101010101010101010101010c01010101010101010101010101010101010101010101010101011402011401020101010201010102090e0e0a0101140101140101010101010101010101010101010108030303030303030303030303030303030303040706060606060606060606060606060606060605`, img`
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2............2.....2
2............2...222
2.....2......2.....2
2.....2......2.....2
2.....2......22....2
2.....2......2.....2
2............2.....2
2......2222..2.2...2
2............2...2.2
2............2.....2
2..................2
2.............2222.2
2..................2
22222222222222222222
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.doorOpenWest,sprites.dungeon.doorClosedEast,myTiles.tile2,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenNorth,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.doorClosedNorth,sprites.dungeon.chestClosed,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
