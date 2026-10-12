// Prices & descriptions from Power Park Cafe Uber Eats menu (Melbourne delivery).
export const categories = [
  { id: 'drinks', label: 'Drinks' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Burgers & Hot Packs' },
  { id: 'wraps', label: 'Wraps & Focaccias' },
  { id: 'snacks', label: 'Snacks & Salads' }
];

export const featured = {
  drinks: { name: 'Coffee', desc: 'Hot, aromatic coffee with a smooth finish — the local favourite.', price: '$6.30', script: 'Fuel for the day', pos: '70% 40%' },
  breakfast: { name: 'Big Breakfast', desc: 'Three eggs on toast, hash brown, sausage, grilled tomato, mushrooms and spinach.', price: '$35.70', script: 'Start strong', pos: '40% 50%' },
  lunch: { name: 'Beef Burger with The Lot Combo', desc: 'Beef burger with egg, bacon, lettuce, tomato, cheese and sauce — plus chips and a soft drink.', price: '$25.20', script: 'Most loved', pos: '60% 30%' },
  wraps: { name: 'Tandoori Turkish Focaccia', desc: 'Tandoori chicken, spinach, roasted capsicum, tomato, cheese and garlic sauce.', price: '$17.50', script: 'Fresh & bold', pos: '50% 60%' },
  snacks: { name: 'HSP (Halal Snack Pack)', desc: 'Meat, chips and sauces — a Dandenong South classic.', price: '$22.40', script: 'Hungry?', pos: '30% 70%' }
};

export const items = {
  drinks: [
    { name: 'Coffee', price: '$6.30', desc: 'Hot, aromatic coffee with a smooth finish.', img: 'coffee.jpg' },
    { name: 'White Hot Chocolate', price: '$6.30', desc: 'Rich and creamy with a velvety texture.', icon: 'coffee' },
    { name: 'Spice Chai Latte', price: '$6.30', desc: 'Aromatic black tea infused with warming spices.', icon: 'coffee' },
    { name: 'Vanilla Chai Latte', price: '$6.30', desc: 'Creamy latte with chai spice and vanilla.', icon: 'coffee' },
    { name: 'Hot Chocolate', price: '$6.30', desc: 'Rich and creamy — a popular pick.', icon: 'coffee' },
    { name: 'Tea', price: '$6.30', desc: 'Hot brewed tea, simple and soothing.', icon: 'coffee' },
    { name: 'Smoothie', price: '$13.30', desc: 'Large. Blended fruit with juice.', icon: 'shake' },
    { name: 'Iced Coffee', price: '$13.30', desc: 'Refreshing cold coffee drink.', img: 'iced-latte.jpg' },
    { name: 'Thickshake', price: '$12.60', desc: 'Rich and creamy thickshake.', icon: 'shake' },
    { name: 'Iced Chocolate', price: '$13.30', desc: 'Milk, ice, ice-cream, whipped cream and chocolate powder.', img: 'iced-latte.jpg' },
    { name: 'Milkshake', price: '$11.90', desc: 'Creamy milkshake — chocolate, strawberry and more.', icon: 'shake' },
    { name: 'Soft Drink', price: '$4.90', desc: '375ml can.', icon: 'cup' }
  ],
  breakfast: [
    { name: 'Big Breakfast', price: '$35.70', desc: 'Three eggs on toast, hash brown, sausage, grilled tomato, mushrooms and spinach.', img: 'bacon-roll.jpg' },
    { name: 'Eggs Benedict', price: '$35.70', desc: 'Three poached eggs on toast, ham, hollandaise and spinach.', icon: 'egg' },
    { name: 'Smoked Salmon', price: '$35.70', desc: 'Three poached eggs on toast, salmon and hollandaise.', icon: 'egg' },
    { name: 'Eggs on Toast', price: '$18.90', desc: 'Toast topped with eggs cooked your way.', icon: 'egg' },
    { name: 'Raisin Toast', price: '$9.10', desc: 'Served with butter.', icon: 'sandwich' },
    { name: 'Egg and Bacon Roll', price: '$12.60', desc: 'Soft egg and crispy bacon in a fresh roll.', img: 'bacon-roll.jpg' },
    { name: 'Tradie Roll', price: '$14.00', desc: 'Egg, bacon, cheese and a hash brown.', img: 'bacon-roll.jpg' },
    { name: 'Hollandaise Roll', price: '$14.70', desc: 'Egg, bacon, cheese, spinach and hollandaise.', icon: 'egg' },
    { name: 'Chorizo Roll', price: '$14.70', desc: 'Egg, bacon, kransky and tomato relish.', icon: 'egg' },
    { name: 'Kransky Wrap', price: '$14.00', desc: 'Egg, bacon, cheese and kransky.', img: 'wrap.jpg' },
    { name: 'Tradie Wrap', price: '$16.10', desc: 'Egg, bacon, cheese and a hash brown.', img: 'wrap.jpg' },
    { name: 'Yakka Wrap', price: '$16.10', desc: 'Egg, bacon, sausage, cheese, hash brown and BBQ sauce.', img: 'wrap.jpg' },
    { name: 'Ham & Cheese Toastie', price: '$11.20', desc: 'Ham and melted cheese on toasted bread.', img: 'chicken-toastie.jpg' },
    { name: 'Ham, Cheese and Tomato Toastie', price: '$11.90', desc: 'Ham, cheese and fresh tomato on toast.', img: 'chicken-toastie.jpg' },
    { name: 'Egg and Bacon Sandwich', price: '$11.20', desc: 'Eggs and crispy bacon on toasted bread.', icon: 'sandwich' }
  ],
  lunch: [
    { name: 'Beef Burger with The Lot Combo', price: '$25.20', desc: 'Burger with egg, bacon, lettuce, tomato, cheese and sauce — chips and soft drink.', img: 'burger.jpg' },
    { name: 'Chicken Burger with The Lot Combo', price: '$25.20', desc: 'Chicken burger with the lot — chips and soft drink.', img: 'burger.jpg' },
    { name: 'Veggie Burger Combo', price: '$25.20', desc: 'Veggie patty with the lot — chips and soft drink.', img: 'burger.jpg' },
    { name: 'Chicken Slider Pack', price: '$13.30', desc: 'Chicken slider with chips.', img: 'burger.jpg' },
    { name: 'Beef Slider Pack', price: '$13.30', desc: 'Beef slider with egg, bacon and chips.', img: 'burger.jpg' },
    { name: 'HSP (Halal Snack Pack)', price: '$22.40', desc: 'Meat, chips and sauces.', icon: 'utensils' },
    { name: 'Roast Pork Hot Pack', price: '$22.40', desc: 'Roast pork, chips and gravy.', icon: 'utensils' },
    { name: 'Roast Beef Hot Pack', price: '$22.40', desc: 'Roast beef, chips and gravy.', icon: 'utensils' },
    { name: 'Fish & Chips', price: '$18.90', desc: 'Fried fish with chips.', icon: 'utensils' },
    { name: 'Beef Burger with The Lot', price: '$16.10', desc: 'Beef patty, lettuce, tomato, cheese, egg, bacon and tomato sauce.', img: 'burger.jpg' },
    { name: 'Schnitzel Burger with The Lot', price: '$16.10', desc: 'Schnitzel, lettuce, tomato, cheese, egg, bacon and mayo.', img: 'burger.jpg' },
    { name: 'Hawaiian Burger', price: '$16.10', desc: 'Schnitzel, lettuce, tomato, cheese, pineapple and mayo.', img: 'burger.jpg' },
    { name: 'Veggie Burger', price: '$16.10', desc: 'Veggie patty, lettuce, tomato, cheese, fried egg and mayo.', img: 'burger.jpg' },
    { name: 'Plain Beef Burger', price: '$13.30', desc: 'Beef patty, lettuce, tomato, cheese and tomato sauce.', img: 'burger.jpg' },
    { name: 'Plain Schnitzel Burger', price: '$13.30', desc: 'Schnitzel, lettuce, tomato, cheese and mayo.', img: 'burger.jpg' },
    { name: 'Steak Sandwich w/ the lot', price: '$18.20', desc: 'Steak, egg, bacon, lettuce, tomato, onion, cheese and sauce.', icon: 'sandwich' },
    { name: 'Plain Steak Sandwich', price: '$15.40', desc: 'Steak, lettuce, tomato, grilled onion, cheese and sauce.', icon: 'sandwich' },
    { name: 'Lamb Souvlaki', price: '$18.90', desc: 'Lamb, lettuce, tomato, onion and garlic sauce.', icon: 'utensils' },
    { name: 'Chicken Souvlaki', price: '$18.90', desc: 'Chicken, lettuce, tomato, onion and garlic sauce.', icon: 'utensils' },
    { name: 'Mixed Souvlaki', price: '$18.90', desc: 'Lamb, chicken, lettuce, tomato, onion and garlic sauce.', icon: 'utensils' }
  ],
  wraps: [
    { name: 'Tandoori Turkish Focaccia', price: '$17.50', desc: 'Tandoori chicken, spinach, roasted capsicum, tomato, cheese and garlic sauce.', img: 'wrap.jpg' },
    { name: 'Chicken & Avocado Turkish Focaccia', price: '$17.50', desc: 'Chicken, avocado, cheese, mayonnaise and cracked pepper.', img: 'wrap.jpg' },
    { name: 'Chicken Pesto Focaccia', price: '$17.50', desc: 'Chicken, spinach, pesto, sundried tomato and cheese.', img: 'wrap.jpg' },
    { name: 'Schnitzel & Bacon Turkish Focaccia', price: '$17.50', desc: 'Chicken schnitzel, bacon, tomato, mayo and BBQ sauce.', img: 'wrap.jpg' },
    { name: 'Chicken Caesar Focaccia', price: '$17.50', desc: 'Chicken, bacon, spinach, egg, parmesan and Caesar dressing.', img: 'wrap.jpg' },
    { name: 'Gourmet Vegetarian Focaccia', price: '$17.50', desc: 'Eggplant, spinach, roasted veg, pesto, feta, sundried tomato and olives.', img: 'wrap.jpg' },
    { name: 'Roast Beef Focaccia', price: '$17.50', desc: 'Roast beef, spinach, cheese, tomato, onion, pickles and mustard.', img: 'wrap.jpg' },
    { name: 'Salami Focaccia', price: '$17.50', desc: 'Salami, roasted pumpkin, capsicum, feta, pesto, olives and sundried tomato.', img: 'wrap.jpg' },
    { name: 'Chicken Parma Turkish Focaccia', price: '$17.50', desc: 'Parma, spinach and tomato.', img: 'wrap.jpg' },
    { name: 'Falafel Zaatar Wrap', price: '$17.50', desc: 'Falafel, spinach, hummus, pickles, tomato and onion.', img: 'wrap.jpg' },
    { name: 'Chicken Schnitzel Wrap', price: '$17.50', desc: 'Schnitzel, spinach, pesto, parmesan, tomato, onion and aioli.', img: 'wrap.jpg' },
    { name: 'Sweet Chilli Chicken Wrap', price: '$17.50', desc: 'Sweet chilli chicken, lettuce, tomato, onion, cheese, mayo and sauce.', img: 'wrap.jpg' },
    { name: 'Mediterranean Zaatar Wrap', price: '$17.50', desc: 'Eggplant, spinach, roasted pumpkin, capsicum, feta, sundried tomato and olives.', img: 'wrap.jpg' },
    { name: 'Chicken Schnitzel Baguette', price: '$17.50', desc: 'Schnitzel, spinach, tomato, onion, olives, feta and garlic sauce.', img: 'wrap.jpg' },
    { name: 'Sweet Chilli Chicken Baguette', price: '$17.50', desc: 'Sweet chilli chicken, spinach, tomato, cheese and sauce.', img: 'wrap.jpg' },
    { name: 'Vegetarian Baguette with jalapeños', price: '$17.50', desc: 'Roasted veg, feta, pesto, sundried tomato and jalapeños.', img: 'wrap.jpg' },
    { name: 'Make Your Own Sandwich', price: 'By add-ons', desc: 'Build your own with fresh fillings from the sandwich bar.', img: 'wrap.jpg' }
  ],
  snacks: [
    { name: 'Hot Chips', price: '$9.10', desc: 'Crispy, golden fries served hot.', icon: 'flame' },
    { name: 'Potato Cakes', price: '$2.10', desc: 'Crispy exterior, fluffy interior.', icon: 'flame' },
    { name: 'Dim Sim', price: '$2.10', desc: 'Steamed dumpling with pork and cabbage.', icon: 'flame' },
    { name: 'Kransky', price: '$5.60', desc: 'Savoury European-style sausage.', icon: 'flame' },
    { name: 'Hot Dog in Batter', price: '$5.60', desc: 'Crispy battered hot dog.', icon: 'flame' },
    { name: 'Devil Wing Ding', price: '$4.20', desc: 'Spicy chicken wing ding.', icon: 'flame' },
    { name: 'Spring Roll', price: '$5.60', desc: 'Crisp pastry filled with vegetables.', icon: 'flame' },
    { name: 'Sweet Chilli Chicken Strips', price: '$4.20', desc: 'Tender chicken strips in sweet chilli.', icon: 'flame' },
    { name: 'Fried Fish', price: '$9.80', desc: 'Crispy fish fillet, served hot.', icon: 'flame' },
    { name: 'Chicken Caesar Salad', price: '$19.60', desc: 'Romaine, chicken and Caesar dressing.', icon: 'salad' },
    { name: 'Greek Salad', price: '$19.60', desc: 'Tomato, cucumber, feta and olives.', icon: 'salad' },
    { name: 'Falafel Salad', price: '$21.00', desc: 'Crunchy falafel with fresh greens.', icon: 'salad' },
    { name: 'Avocado Chicken Salad', price: '$21.00', desc: 'Fresh avocado and chicken salad.', icon: 'salad' },
    { name: 'Tandoori Chicken Salad', price: '$21.00', desc: 'Tandoori-spiced chicken with mixed greens.', icon: 'salad' },
    { name: 'Chicken Pumpkin Salad', price: '$19.60', desc: 'Chicken with roasted pumpkin and salad.', icon: 'salad' },
    { name: 'Fruit Salad', price: '$12.60', desc: 'Fresh seasonal fruit.', icon: 'salad' }
  ]
};
