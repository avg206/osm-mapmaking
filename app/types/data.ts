export interface LayerPayload {
  name: string;
  geoData: any;
}

export interface Layer extends LayerPayload {
  id: string;
  color: string;
}

export interface AppState {
  layers: Layer[];
}
