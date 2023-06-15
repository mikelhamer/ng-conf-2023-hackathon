export enum PlayerName {
  BATMAN = 'BATMAN',
  JOKER = 'JOKER'
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
