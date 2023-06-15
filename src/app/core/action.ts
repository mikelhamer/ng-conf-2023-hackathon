export enum Player {
  BATMAN,
  JOKER
}

export enum AttackType {
  PHYSICAL,
  MAGIC
}

export interface Action {
  source: Player
  target: Player
  attackType: AttackType,
  gameOver: boolean;
}
