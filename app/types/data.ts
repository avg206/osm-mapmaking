export interface LayerPayload {
  name: string;
  geoData: any;
}

export interface Layer extends LayerPayload {
  id: string;
}

export interface AppState {
  layers: Layer[];
}
