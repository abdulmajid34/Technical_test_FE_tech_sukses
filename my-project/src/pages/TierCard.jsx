import React from 'react';

const TierCard = ({ title, features }) => (
  <div id='tierCard' className="border rounded-lg shadow-lg p-6 max-w-sm">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">{feature}</li>
      ))}
    </ul>
    <button className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
      Select {title}
    </button>
  </div>
);

const TierCards = () => {
  const tiers = [
    {
      title: 'TIER 1/Basic',
      features: [
        'Mencatat barang masuk',
        'Mencatat barang keluar',
        'Mencatat hasil keuntungan'
      ]
    },
    {
      title: 'TIER 2/Business',
      features: [
        'Mencatat barang masuk dan keluar',
        'Mencatat Keuntungan',
        'Dapat menganalisa hasil penjualan dengan CHART',
        'Support 7x24 Jam'
      ]
    },
    {
      title: 'TIER 3/Entrepreneur',
      features: [
        'Mencatat barang masuk dan keluar',
        'Mencatat Keuntungan',
        'Dapat menganalisa hasil penjualan dengan CHART',
        'Support 7x24 Jam',
        'Export data ke Excel',
        'AI Prediksi penghasilan'
      ]
    }
  ];

  return (        
    <>
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Tier List</h2>
        <div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-8">        
      {tiers.map((tier, index) => (
        <TierCard key={index} title={tier.title} features={tier.features} />
      ))}
    </div>

        </div>
    </>
  );
};

export default TierCards;
