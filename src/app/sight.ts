import { LatLng } from 'leaflet';

export class Sight {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  shortDescription: string;
  coordinates: LatLng;
  credits: string;
}