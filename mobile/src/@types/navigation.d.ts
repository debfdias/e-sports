export interface GameParams {
  id: string;
  title: string;
  banner_url: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}