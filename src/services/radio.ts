import type { RadioStation } from "@/types/radio";
import { api } from "./api";

export interface RadioStationParams {
  search?: string;
  name?: string;
  country?: string;
  tag?: string;
  limit?: number;
}

const getStations = (params: RadioStationParams) => {
  return api.get<RadioStation[]>("/stations/search", {
    params,
  });
};

export const RadioService = {
  getStations,
};
