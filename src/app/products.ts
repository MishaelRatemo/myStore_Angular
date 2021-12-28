export interface Product {
    id: number;
    name: string;
    phoneImage: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Sumsang Galaxy ',
      phoneImage : 'assets/img/samsung.jpeg',
      price: 799,
      description: " The Samsung Galaxy Z Fold 3 is the latest smartphone that features a 7.6 inch Dynamic AMOLED 2X,  display with a 120Hz screen refresh rate, 12 MP +12 MP + 12 MP triple rear cameras, a single 10MP selfie camera, and a single 4MP Cover camera. It runs on a Qualcomm Snapdragon 888 5G chipset with 12GB of RAM, Android 11 on top of  One UI 3 software. There’s also a side-mounted fingerprint scanner, 5G LTE connectivity, and 256GB or 512GB of expandable storage"
    },
    {
      id: 2,
      name: 'Tecno Camon',
      phoneImage: 'assets/img/tecno-camon.jpeg',
      price: 699,
      description: 'A great phone with one of the best cameras Tecno Camon 17 Pro has a 6.8-inch touchscreen display. Tecno Camon 17 Pro is run by 2.05GHz Octa-core Mediatek’s Helio G95 processor. Tecno Camon 17 Pro has 8GB RAM and a 256GB internal storage expandable to 256GB using a microSD card. Tecno Camon 17 Pro has a 64MP + 8MP + 2MP + 2MP Quad Rear camera and a 48MP Front camera for selfies. Tecno Camon 17 Pro runs Android 11 and has a 5000 mAh Battery.'
    },
    {
      id: 3,
      name: 'Xiome poco X3 Pro',
      phoneImage: 'assets/img/xiome.jpeg',
      price: 430,
      description: 'Xiaomi Poco X3 Pro is a mid-range smartphone, with high-end specs. With Xiaomi Poco X3 Pro, you get a powerful processor, with a quad-camera system, and fast charging at an affordable price.'
    },
    {
      id: 4,
      name: 'Itel 4G',
      phoneImage: 'assets/img/itel.jpeg',
      price: 899,
      description: 'The fastest mobile internet in the market'
    }
    ,
    {
      id: 5,
      name: 'Nokia 5.3',
      phoneImage: 'assets/img/nokia.jpeg',
      price: 179,
      description: `Nokia 5.3
                    6GB RAM
                    64GB ROM
                    6.55" IPS LCD
                    13MP Quad Rear Camera
                    Android 10.0 Pie Octa-core
                    4000mAh Battery
                    Dubai Warranty`
    }
  ];
  
  



// export class Products {
// }
