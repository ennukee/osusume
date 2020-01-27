export interface PanelDimObject {
  width: number;
  height: number;
}

export interface PanelDimContainer {
  [key: string]: PanelDimObject;
}

export interface HomeItem {
  color: string;
  title: string;
  // TODO: expand further and extrapolate to utils/interfaces.ts when finished
}
