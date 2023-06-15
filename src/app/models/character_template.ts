import {PlayerName} from '../core/action';

export interface CharacterTemplate {
    characterImage: string;
    name: PlayerName;
    max_hp: number;
    max_mp: number;
    physicalStrength: number;
    magicStrength: number;
}
