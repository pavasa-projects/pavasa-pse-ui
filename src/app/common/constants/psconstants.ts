export const PS_CONSTANTS = {
  propertyTypeList: ['Residential', 'Commercial'],
  residentialPropertyTypeList: ['cc', 'ddd'],
  commercialPropertyTypeList: [
    {item_id: 'Office space', item_text: 'Office space'},
    {item_id: 'Co-working', item_text: 'Co-working'},
    {item_id: 'Restaurant/Cafe', item_text: 'Restaurant/Cafe'},
    {item_id: 'Shop/Showroom', item_text: 'Shop/Showroom'},
    {item_id: 'Industrial building', item_text: 'Industrial building'},
    {item_id: 'Industrial Shed', item_text: 'Industrial Shed'},
    {item_id: 'Godown/Warehouse', item_text: 'Godown/Warehouse'}
  ],

  bedrooms: ['1', '2', '3', '4', '5', '6+'],
  balconies: ['0', '1', '2', '3', '4', '5+'],
  bathrooms: ['1', '2', '3', '4', '5+'],
  floorNumbers: [...Array(150)].map((_, i) => i),
  furnishingStatuses: ['Furnished', 'Semi-Furnished', 'UnFurnished'],

  amenities: [
    'Lift',
    'Gym',
    'Garden',
    'Club House',
    'Swimming Pool',
    'Jogging Track',
    'Security',
    'CCTV Camera',
    'Wi-Fi Connectivity',
    'Intercom',
  ],

  furnishings: [
    'Air conditioner',
    'Gas pipeline',
    'Power Backup',
    'Fridge',
    'Washing Machine',
    'Sofa',
    'Beds',
    'TV',
    'Microwave',
    'Dinning Table',
  ],

  tenantTypes: ['Family', 'Bachelors', 'Both']
};
