export interface RadioStation {
  changeuuid: string;
  stationuuid: string;
  serveruuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  iso_3166_2: string | null;
  state: string;
  language: string;
  languagecodes: string;
  votes: number;
  lastchangetime: string;
  lastchangetime_iso8601: string;
  codec: string;
  bitrate: number;
  hls: number;
  lastcheckok: number;
  lastchecktime: string;
  lastchecktime_iso8601: string;
  lastcheckoktime: string;
  lastcheckoktime_iso8601: string;
  lastlocalchecktime: string;
  lastlocalchecktime_iso8601: string;
  clicktimestamp: string;
  clicktimestamp_iso8601: string;
  clickcount: number;
  clicktrend: number;
  ssl_error: number;
  geo_lat: number | null;
  geo_long: number | null;
  geo_distance: number | null;
  has_extended_info: boolean;
}

export type UpdateFavoriteRadioPayload = Partial<Pick<RadioStation, "name" | "country">>;

export type DeleteFavoriteRadio = (radioStation: RadioStation) => void;

export type UpdateFavoriteRadio = (radioStation: UpdateFavoriteRadioPayload) => void;

export type AddFavoriteRadio = (radioStation: RadioStation) => void;

export type TogglePlayBack = (radioStation?: RadioStation) => void;