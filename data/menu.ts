export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  image?: string;
};

export const menuItems: MenuItem[] = [
  // Soups
  { id: "s1", name: "Hot & Sour", price: 169, category: "Soups", isVeg: true },
  { id: "s2", name: "Lemon Coriander", price: 169, category: "Soups", isVeg: true },
  { id: "s3", name: "Cream Of Tomato", price: 189, category: "Soups", isVeg: true },
  { id: "s4", name: "Roasted Almond Broccoli", price: 249, category: "Soups", isVeg: true, isChefSpecial: true },

  // Salads
  { id: "sl1", name: "Tossed Salad", price: 199, category: "Salads", isVeg: true },
  { id: "sl2", name: "Veg Caesar Salad", price: 249, category: "Salads", isVeg: true },
  { id: "sl3", name: "Greek Salad", price: 299, category: "Salads", isVeg: true },
  { id: "sl4", name: "Macaroni Salad", price: 319, category: "Salads", isVeg: true },

  // Appetizers
  { id: "a1", name: "Stuffed Pao Slider", price: 199, category: "Appetizers", isVeg: true },
  { id: "a2", name: "Salsa Nachos", price: 249, category: "Appetizers", isVeg: true },
  { id: "a3", name: "Cheese Nachos", price: 279, category: "Appetizers", isVeg: true },
  { id: "a4", name: "Bruschetta", price: 279, category: "Appetizers", isVeg: true },
  { id: "a5", name: "Veg Delight Tacos", price: 279, category: "Appetizers", isVeg: true },
  { id: "a6", name: "Vanabella Jungle Chaat", price: 289, category: "Appetizers", isVeg: true, isChefSpecial: true },
  { id: "a7", name: "Mozzarella Cigars", price: 299, category: "Appetizers", isVeg: true },

  // Small Bites
  { id: "sb1", name: "Salted Fries", price: 139, category: "Small Bites", isVeg: true },
  { id: "sb2", name: "Peri Peri Fries", price: 169, category: "Small Bites", isVeg: true },
  { id: "sb3", name: "Cheese Balls", price: 199, category: "Small Bites", isVeg: true },
  { id: "sb4", name: "Chef Special Fries", price: 229, category: "Small Bites", isVeg: true, isChefSpecial: true },
  { id: "sb5", name: "Cheese Garlic Bread", price: 239, category: "Small Bites", isVeg: true },
  { id: "sb6", name: "Nuggets", price: 249, category: "Small Bites", isVeg: true },

  // Sandwich/Burger
  { id: "sb7", name: "Mexican Mayo Sandwich", price: 199, category: "Sandwich/Burger", isVeg: true },
  { id: "sb8", name: "Tandoori Vegetable Sandwich", price: 199, category: "Sandwich/Burger", isVeg: true },
  { id: "sb9", name: "Tandoori Paneer Sandwich", price: 219, category: "Sandwich/Burger", isVeg: true },
  { id: "sb10", name: "Chef Special Sandwich", price: 229, category: "Sandwich/Burger", isVeg: true, isChefSpecial: true },
  { id: "sb11", name: "Aloo Tikki Burger", price: 189, category: "Sandwich/Burger", isVeg: true },
  { id: "sb12", name: "Veggie Burger", price: 199, category: "Sandwich/Burger", isVeg: true },
  { id: "sb13", name: "Tandoori Paneer Burger", price: 229, category: "Sandwich/Burger", isVeg: true },

  // Pizza
  { id: "p1", name: "Margherita Pizza", price: 265, category: "Pizza", isVeg: true },
  { id: "p2", name: "Cheese Corn Pizza", price: 290, category: "Pizza", isVeg: true },
  { id: "p3", name: "Veg Delight Pizza", price: 299, category: "Pizza", isVeg: true },
  { id: "p4", name: "BBQ Veggies Pizza", price: 319, category: "Pizza", isVeg: true },
  { id: "p5", name: "BBQ Paneer Pizza", price: 339, category: "Pizza", isVeg: true },
  { id: "p6", name: "Tandoori Paneer Pizza", price: 339, category: "Pizza", isVeg: true },
  { id: "p7", name: "Exotic Pizza", price: 349, category: "Pizza", isVeg: true },

  // Pasta
  { id: "pa1", name: "Alfredo Pasta (Penne)", price: 319, category: "Pasta", isVeg: true },
  { id: "pa2", name: "Penne Rosa Pasta", price: 319, category: "Pasta", isVeg: true },
  { id: "pa3", name: "Arrabbiata Pasta", price: 329, category: "Pasta", isVeg: true },
  { id: "pa4", name: "Aglio O Olio (Spaghetti)", price: 329, category: "Pasta", isVeg: true },
  { id: "pa5", name: "Pesto Perfection", price: 349, category: "Pasta", isVeg: true, isChefSpecial: true },

  // Wraps
  { id: "w1", name: "Grilled Veggie Wrap", price: 349, category: "Wraps", isVeg: true },
  { id: "w2", name: "Peri Peri Paneer Wrap", price: 379, category: "Wraps", isVeg: true },
  { id: "w3", name: "Tandoori Paneer Wrap", price: 389, category: "Wraps", isVeg: true },
  { id: "w4", name: "Chef Special Wrap", price: 399, category: "Wraps", isVeg: true, isChefSpecial: true },

  // Beverages
  { id: "b1", name: "Americano", price: 89, category: "Beverages", isVeg: true },
  { id: "b2", name: "Lemon Tea", price: 99, category: "Beverages", isVeg: true },
  { id: "b3", name: "Masala Tea", price: 109, category: "Beverages", isVeg: true },
  { id: "b4", name: "Hot Coffee", price: 109, category: "Beverages", isVeg: true },
  { id: "b5", name: "Hot Chocolate", price: 169, category: "Beverages", isVeg: true },

  // Coolers
  { id: "c1", name: "Fresh Lime Soda", price: 149, category: "Coolers", isVeg: true },
  { id: "c2", name: "Lemon Ice Tea", price: 189, category: "Coolers", isVeg: true },
  { id: "c3", name: "Peach Ice Tea", price: 189, category: "Coolers", isVeg: true },
  { id: "c4", name: "Kiwi Mojito", price: 189, category: "Coolers", isVeg: true },
  { id: "c5", name: "Cold Coffee", price: 189, category: "Coolers", isVeg: true },
  { id: "c6", name: "Cold Chocolate Frappe", price: 199, category: "Coolers", isVeg: true },
  { id: "c7", name: "Strawberry Lemonade", price: 199, category: "Coolers", isVeg: true },
  { id: "c8", name: "Basil Lemonade", price: 219, category: "Coolers", isVeg: true },

  // Mocktails
  { id: "m1", name: "Orange Sunrise", price: 149, category: "Mocktails", isVeg: true },
  { id: "m2", name: "Spicy Guava Chilli", price: 159, category: "Mocktails", isVeg: true },
  { id: "m3", name: "Beach Ride", price: 169, category: "Mocktails", isVeg: true },
  { id: "m4", name: "Sex On the Beach", price: 199, category: "Mocktails", isVeg: true },
  { id: "m5", name: "Berry Blossom", price: 219, category: "Mocktails", isVeg: true },
  { id: "m6", name: "Blue Redry Punch", price: 229, category: "Mocktails", isVeg: true },
  { id: "m7", name: "Vergin Pink Lady", price: 249, category: "Mocktails", isVeg: true },

  // Shakes
  { id: "sh1", name: "Blueberry Shake", price: 349, category: "Shakes", isVeg: true },
  { id: "sh2", name: "Strawberry Shake", price: 379, category: "Shakes", isVeg: true },
  { id: "sh3", name: "Nutella Shake", price: 389, category: "Shakes", isVeg: true },
  { id: "sh4", name: "Oreo Shake", price: 389, category: "Shakes", isVeg: true },
  { id: "sh5", name: "Biscoff Shake", price: 399, category: "Shakes", isVeg: true },
  { id: "sh6", name: "Kit Kat Shake", price: 399, category: "Shakes", isVeg: true },

  // Desserts
  { id: "d1", name: "Ice Cream (1 Scoop)", price: 60, category: "Desserts", isVeg: true },
  { id: "d2", name: "Ice Cream (2 Scoops)", price: 100, category: "Desserts", isVeg: true },
  { id: "d3", name: "Chocolate Sandwich", price: 159, category: "Desserts", isVeg: true },
  { id: "d4", name: "Hot Brownie", price: 199, category: "Desserts", isVeg: true },
  { id: "d5", name: "French Toast", price: 219, category: "Desserts", isVeg: true },
  { id: "d6", name: "Sizzling Brownie", price: 269, category: "Desserts", isVeg: true },
  { id: "d7", name: "Pan Cake", price: 289, category: "Desserts", isVeg: true },

  // Add-ons
  { id: "ad1", name: "Water Bottle", price: 30, category: "Add-ons", isVeg: true },
  { id: "ad2", name: "Cookie", price: 30, category: "Add-ons", isVeg: true },
  { id: "ad3", name: "Cheese Dip", price: 30, category: "Add-ons", isVeg: true },
  { id: "ad4", name: "Chipotle Dip", price: 30, category: "Add-ons", isVeg: true },
  { id: "ad5", name: "Cheese Slice", price: 30, category: "Add-ons", isVeg: true },
];

export const categories = [
  "All",
  "Soups",
  "Salads",
  "Appetizers",
  "Small Bites",
  "Sandwich/Burger",
  "Pizza",
  "Pasta",
  "Wraps",
  "Beverages",
  "Coolers",
  "Mocktails",
  "Shakes",
  "Desserts",
  "Add-ons"
];
