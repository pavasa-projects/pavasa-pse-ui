export interface Property {
  _id: string;
  // location
  propertyLocation: string;
  lat: number;
  lng: number;
  societyName: string;

  // property details
  subTypeOfProperty: string;
  noOfBedrooms: number;
  noOfBalconies: number;
  noOfBathrooms: number;
  floorNo: string;
  totalFloors: number;
  noOfCoveredParking: number;
  noOfOpenParking: number;

  // rent details
  monthlyRent: number;
  securityAmount: number;
  maintenanceCharges: number;

  // more property details
  carpetArea: number;
  preferredTenantType: string;
  furnishingStatus: string;
  furnishingDetails: string[];
  amenities: string[];
  // TODO : available from

  // TODO : property photos
}
