export class Character {
  constructor (public name: string, public gender: string, public charisma: number, public dexterity: number, public intelligence: number, public strength: number, public inventory: string[] = [], public gold: number = 0) { }
}
