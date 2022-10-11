export type SpritesType = {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other?: OtherType;
  versions?: VersionsType;
  animated?: SpritesType;
};

export type OnePokemonType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: AbilityType[];
  forms: SpeciesType[];
  gameIndices: GameIndexType[];
  heldItems: HeldItemType[];
  locationAreaEncounters: string;
  moves: MoveType[];
  species: SpeciesType;
  sprites: SpritesType;
  stats: StatType[];
  types: PocemonType[];
  pastTypes: PastTypeType[];
};

export type AbilityType = {
  isHidden: boolean;
  slot: number;
  ability: SpeciesType;
};

export type SpeciesType = {
  name: string;
  url: string;
};

export type GameIndexType = {
  gameIndex: number;
  version: SpeciesType;
};

export type HeldItemType = {
  item: SpeciesType;
  versionDetails: VersionDetailType[];
};

export type VersionDetailType = {
  rarity: number;
  version: SpeciesType;
};

export type MoveType = {
  move: SpeciesType;
  versionGroupDetails: VersionGroupDetailType[];
};

export type VersionGroupDetailType = {
  levelLearnedAt: number;
  versionGroup: SpeciesType;
  moveLearnMethod: SpeciesType;
};

export type PastTypeType = {
  generation: SpeciesType;
  types: PocemonType[];
};

export type PocemonType = {
  slot: number;
  type: SpeciesType;
};

export type GenerationVType = {
  blackWhite: SpritesType;
};

export type GenerationIvType = {
  diamondPearl: SpritesType;
  heartgoldSoulsilver: SpritesType;
  platinum: SpritesType;
};

export type VersionsType = {
  generationI: GenerationIType;
  generationIi: GenerationIiType;
  generationIii: GenerationIiiType;
  generationIv: GenerationIvType;
  generationV: GenerationVType;
  generationVi: { [key: string]: HomeType };
  generationVii: GenerationViiType;
  generationViii: GenerationViiiType;
};

export type GenerationIType = {
  redBlue: RedBlueType;
  yellow: RedBlueType;
};

export type RedBlueType = {
  backDefault: string;
  backGray: string;
  frontDefault: string;
  frontGray: string;
};

export type GenerationIiType = {
  crystal: CrystalType;
  gold: CrystalType;
  silver: CrystalType;
};

export type CrystalType = {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
};

export type GenerationIiiType = {
  emerald: EmeraldType;
  fireredLeafgreen: CrystalType;
  rubySapphire: CrystalType;
};

export type EmeraldType = {
  frontDefault: string;
  frontShiny: string;
};

export type HomeType = {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
};

export type GenerationViiType = {
  icons: DreamWorldType;
  ultraSunUltraMoon: HomeType;
};

export type DreamWorldType = {
  frontDefault: string;
  frontFemale: null;
};

export type GenerationViiiType = {
  icons: DreamWorldType;
};

export type OtherType = {
  dreamWorld: DreamWorldType;
  home: HomeType;
  officialArtwork: OfficialArtworkType;
};

export type OfficialArtworkType = {
  frontDefault: string;
};

export type StatType = {
  baseStat: number;
  effort: number;
  stat: SpeciesType;
};
