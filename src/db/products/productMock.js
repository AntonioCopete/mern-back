// const db = require("../models");

function seedProducts() {
  return [
    {
      images: 'bamboo-keyword.jpeg',
      title: 'Large bamboo keyboard',
      description:
        'Genuine bamboo wood keyboard with 108 keys made of real bamboo, individually engraved and varnished to give you a comfortable typing and total sensory experience.',
      price: 79.99,
      stock: 100,
    },
    {
      images: 'bamboo-mouse.jpeg',
      title: 'Bamboo Mouse',
      description:
        'Wireless mouse made of bamboo wood, finely crafted from a real block of bamboo, precisely machined and delicately varnished.',
      price: 39.99,
      stock: 10,
    },
    {
      images: 'bamboo-wireless.jpeg',
      title: 'Bamboo Wireless charger 10W',
      description:
        'Bamboo Electronics 10W wireless charger, compatible with all devices and Qi certified. Made entirely of real bamboo, and equipped with a USB C port of the latest generation. Combine technology, nature, and decoration.',
      price: 39.99,
      stock: 100,
    },
    {
      images: 'bamboo-macbook.jpeg',
      title: 'Wooden MacBook protector',
      description:
        'A real thin sheet of natural bamboo comes to dress your MacBook with softness and lightness.',
      price: 29.99,
      stock: 80,
    },
    {
      images: 'bamboo-sunglasses.png',
      title: 'Wayfarer - Bamboo lens',
      description:
        'Mabboo has taken a sunglasses classic and made it even better - using a full bamboo laminate frame and arms for the very first time.',
      price: 89,
      stock: 80,
    },
    {
      images: 'bamboo-watch.jpeg',
      title: 'Waterproof Bamboo watch - 48mm',
      description:
        "For those intrepid types amongst you, or for those who like to keep a watch on during a bath or shower we've created a waterproof bamboo watch just for you.",
      price: 80,
      stock: 80,
    },
    {
      images: 'bamboo-teamug.jpeg',
      title: 'Bamboo tea mug',
      description:
        "Quite possibly the most beautiful travel tea mug you're likely to come across. No matter how many times it is filled, or what is put into it, the stainless steel & bamboo mug keep drinks fresh and clean tasting.",
      price: 15,
      stock: 15,
    },
    {
      images: 'bamboo-calculator.png',
      title: 'Bamboo calculator',
      description:
        'Yes we went and did it - a bamboo calculator of all things! These calculators are solar powered and have great chunky buttons that even a panda could operate. An essential addition to jazz up any home or office!',
      price: 25,
      stock: 800,
    },
    {
      images: '',
      title: 'Tea flask - Bamboo handle',
      description:
        "Love a hot drink, like to take one on the commute, or when you're out and about - then this is a must have product for you. Our tea flask is great for any type of hot drinks, and keeps them hot (yes hot) not just warm for 4+hours. Removable tea lid included with infusion canister so loose tea can brew gently but not end up in your mouth whilst drinking! Food grade stainless steel inner, stylishly wrapped in bamboo with our new bamboo handle lid.",
      price: 25,
      stock: 800,
    },
    {
      images: '',
      title: 'Bamboo lunchboxes',
      description: 'Jazz up lunch and be zero waste whilst doing so! ',
      price: 20,
      stock: 2,
    },
    {
      images: '',
      title: 'Bamboo toothbrush cup holder',
      description:
        'Keep your bathroom organised and your bamboo toothbrushes looking fantastic in a bamboo toothbrush cup holder. Cup created from one segment of bamboo.',
      price: 10,
      stock: 200,
    },
    {
      images: '',
      title: 'Bamboo double pet stand & bowls',
      description:
        'Messy feeding areas will be a thing of the past with our bamboo pet stands. Your furry friend will love having a chow down or drink using our stands.',
      price: 15,
      stock: 100,
    },
    {
      images: '',
      title: 'Notebook and pen set',
      description:
        "Experience the joy of writing anything down when it's done in a bamboo covered notebook, with bamboo pen included.",
      price: 10,
      stock: 100,
    },
    {
      images: '',
      title: 'Bamboo cutlery, chopstick, reusable bamboo straw set',
      description:
        'Our organic bamboo cutlery sets include a knife, fork, spoon, set of chopsticks, reusable bamboo straw and cleaning brush. These items are 100% biodegradable, vegan and eco-friendly.',
      price: 12,
      stock: 100,
    },
    {
      images: '',
      title: 'Monitor Riser Stand Bamboo wood Desk',
      description:
        'This is a multifunction computer monitor riser. It is made from natural bamboo, which is tough, scratch-resistant, easy to clean and recyclable. The various slots at the top are for your cell phone, mug, pens and other office supplies. This versatile monitor stand riser allows you to keep all the little things in one place and keep your keyboard and mouse underneath so you have plenty of space to read and write. The wire hole will help you keep wires and cables clean and organized. The pre-drilled holes make installation quick and easy.',
      price: 20.99,
      stock: 100,
    },
    {
      images: '',
      title: 'Artesà Copper Bamboo Serving Bowl, 26cm',
      description:
        'It’s usually the food that ‘wows’ guests, but with this large bamboo serving dish from Artesà, even the bread course will make an impression at the dining table.',
      price: 17.99,
      stock: 100,
    },
    {
      images: '',
      title: 'Bamboo Smart Sonic Electric Toothbrush',
      description:
        'Made by bamboo which is plastic free material that can be recyclable and can help the environment. ',
      price: 59.99,
      stock: 100,
    },
    {
      images: '',
      title: 'Bamboo Toothbrushes',
      description:
        'Bamboo toothbrushes are made with the finest Mao bamboo, which is biodegradable and sustainable. All of our packaging is 100% biodegradable and compostable. The handle is reusable in arts & crafts, You can decorating the toothbrush handles according to your preferences , or use it for garden plant.',
      price: 7.99,
      stock: 100,
    },
    {
      images: '',
      title: 'The Cloud Bamboo Duvet',
      description:
        'Luxuriously Soft - The outer bamboo cover is made from 100% rayon originated from bamboo (300 Thread Count). The filling consists of 50% Bamboo and 50% Nano Microfibre. Using a sewn through (Bavarian) pocket construction for an even distribution across the duvet to prevent any cold spots.',
      price: 126,
      stock: 5,
    },
    {
      images: '',
      title: 'Luxury Memory Foam Bamboo Pillow',
      description:
        'Our bamboo pillow cover is sumptuously soft and naturally breathable, encouraging airflow and coolness whilst you sleep on your memory foam pillow.',
      price: 45.95,
      stock: 5,
    },
  ];
}

module.exports = {
  seedProducts: seedProducts,
};
