export interface GameParams {
  id: string;
  title: string;
  banner_url: string;
}

export interface PlayerParams {
  id?: string;
  avatar?: string;
  username?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: PlayerParams;
      game: GameParams;
      signin: undefined;
    }
  }
}