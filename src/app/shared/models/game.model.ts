import {IGameCat} from './game-cat.model';
import {IGameTypes} from './game-types.model';

export interface IGame {
  id: string;
  name: string;
  title: string;
  categories: string[];
  features: string[];
  themes: any[];
  icons: string[];
  backgrounds: string[];
  server_game_id: string;
  front_game_id: string;
  ratio: string;
  status: string;
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options: any;
  blocked_countries: any;
  has_age_restriction: number;
  icon_2: string;
  background: string;
  types: IGameTypes;
  game_skin_id: string;
  cats: IGameCat[];
  feats: any[];
  thms: any[];
  active: string;

}
