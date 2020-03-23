module.exports = {
  roles: [],
  objects: [
    {
      faces: ["dnd/battlemap.jpg"],
      locked: true,
      x: 8,
      y: 8,
      width: 1540/2,
      height: 2100/2,
      snapZones: [
        { cellWidth: 70/2, cellHeight: 70/2 },
      ],
    },
    {
      id: "checkersPiece",
      prototype: true,
      width: 70/2,
      height: 70/2,
    },
    {
      id: "redPiece",
      prototype: true,
      prototypes: ["checkersPiece"],
      faces: [
        "checkers/red_pawn.png",
        "checkers/red_king.png",
      ],
    },
    {
      id: "blackPiece",
      prototype: true,
      prototypes: ["checkersPiece"],
      faces: [
        "checkers/black_pawn.png",
        "checkers/black_king.png",
      ],
    },
    { prototypes: ["redPiece"],   x: 700/2+8, y: 700/2+8},
    { prototypes: ["blackPiece"], x: 140/2+8, y: 140/2+8},
  ],
};
