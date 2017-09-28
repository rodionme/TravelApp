import { LatLng } from 'leaflet';
import { SightType } from '../sight-type.enum';

export class Sight {
  id: number;
  title: string;
  type: SightType;
  image: string;
  description: string;
  shortDescription: string;
  coordinates: LatLng;
  credits: string;
}