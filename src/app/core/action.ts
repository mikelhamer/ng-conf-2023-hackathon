export enum PlayerName {
  BATMAN,
  JOKER
}

export interface Attack {
  type: AttackType,
  strength: number
}

export enum AttackType {
  PHYSICAL,
  MAGIC
}

export interface Action {
  sourcePlayer: PlayerName
  targetPlayer?: PlayerName
  attack?: Attack,
  gameOver?: boolean;
}
