const tabsInfo = [
  {
    title: 'Property Details',
    groupFields: [
      {
        subTitle: 'Basic information',
        fields: [
          { name: 'Property Name', value: 'Detached' },
          { name: 'MLS Number', value: '72889712' },
          { name: 'Acreage', value: '0.5' },
          { name: 'Date Listed', value: '09/03/2021' },
        ],
      },
      {
        subTitle: 'Property',
        fields: [
          { name: 'Square Feet', value: '7,450' },
          { name: 'Year Built', value: '2020' },
          { name: 'Rooms', value: '22' },
          { name: 'Parking Spaces', value: '6' },
        ],
      },
      {
        subTitle: 'Location',
        fields: [
          { name: 'Neighborhood', value: 'Brookline Village' },
          { name: 'Town', value: 'Brookline' },
          { name: 'County', value: 'Norfolk' },
          { name: 'State', value: 'MA' },
          { name: 'Zip', value: '02445' },
        ],
      },
    ],
  },
  {
    title: 'Interior Features',
    groupFields: [
      {
        subTitle: 'Beds/Baths',
        fields: [
          { name: 'Bedrooms', value: '7' },
          { name: 'Bathrooms', value: '8' },
        ],
      },
      {
        subTitle: 'Basement',
        fields: [{ name: 'Basement', value: 'No' }],
      },
    ],
  },
  {
    title: 'Exterior Features',
    groupFields: [
      {
        subTitle: 'Features',
        fields: [
          { name: 'Parking Description', value: 'On Street Permit, Stone/Gravel' },
          { name: 'Exterior', value: 'Clapboard' },
        ],
      },
    ],
  },
  {
    title: 'Utilities and Appliances',
    groupFields: [
      {
        subTitle: 'Utilities and Appliances',
        fields: [{ name: 'Cooling', value: 'Central Air, Wall AC' }],
      },
    ],
  },
  {
    title: 'Other Details',
    groupFields: [
      {
        subTitle: 'Finance',
        fields: [{ name: 'Taxes', value: '$44,763' }],
      },
    ],
  },
];

export default tabsInfo;
