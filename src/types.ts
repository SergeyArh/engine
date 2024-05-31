export interface Train {
  name: string,
  description: string,
  characteristics?: any[],
  id?: number
}

export interface ActionCharacter {
  type: string,
  train?: Train,
  force?: number | string,
  speed?: number | string,
  engine?: number | string,
  prev?: number | string
}

export interface ActionTrains {
  type: string,
  trains: Train[]
}

export interface ActionStatus {
  type: string
}

export interface RootStateChar {
  character: Train;
}

export interface CharRowProps {
  speed: string;
  force: string;
  engine: string;
}

export interface ActionThunk {
  type: string,
  trains: Train[]
}

export interface RootStateRow {
  trains: Train[]
}
