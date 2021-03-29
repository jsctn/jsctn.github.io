const imgAlt = {
  'first-img': 'An airplane window view near landing, overlooking the ocean in daylight dotted by several ships and clouded islands in the distance.',
  'bus-1': 'The view from a moving vehicle on a curved road, with palm trees on a median passing by and a cluster of identical off-white high-rises against blue skies moving into view.',
  'bus-2': 'The view from the moving vehicle as it passes some trees then obliquely enters a looming concrete underpass, revealing a skyline of high-rises beyond.',
  'room-img': 'A small yet organized living room, with a petite sofabed below blinded windows and flanked by a side table with a lamp and a coffee table in front, viewed as if standing at the entrance. A door to the left shows a glimpse of a small bedroom. Lineart illustration.',
  'nap-img': 'Same illustration as before of the living room.',
  'food1-1': 'The view while waiting at a busy intersection, panning diagonally upwards from the crowd to brightly lit stores across the street then to huge billboards on a high-rise building that extends vertically out-of-frame.',
  'food1-2': 'The view from an elevator as it rises, looking at a busy sidewalk and storefronts stacked with offices and housing units with laundry hanging out some of the windows.',
  'food2-1': 'Zooming in on a plate of bite-sized appetizers of raw salmon topped with fish roe, on a dark wooden table and surrounded by some paper menus, condiment containers, and canned drinks. A hand gets ready with a pair of chopsticks to start eating.',
  'food2-2': 'A shaky closeup of a bowl of shucked oysters and fish roe with a lemon slice atop crushed ice, at the same table, where multiple people are seated.',
  'home-img': 'The small living room viewed from the opposite angle as if sitting on the sofabed, now with 4 pairs of shoes scattered by the entrance, an open suitcase overflowing on the floor, and indistinct items strewn around. Two narrow doorways reveal a kitchen and another bedroom. Lineart illustration.', // overridden in index.html
  'meet1-img': 'Same illustration as before of the messy living room.',
  'meet2-img': 'A yellow-striped crosswalk as a handful of people wait on the opposite side and a few cars pass by, against a background of miscellaneous storefronts, some unopened.',
  'nugs-img': 'The view while sitting on the living room floor, first looking at a feast of McDonald\'s takeout (chicken nugget boxes, dipping sauces, and a large fries) on the coffee table, then panning to the wall-mounted television playing an episode of Monogatari.',
  'trip1-1-img': 'Panning across an elevated view from a gondola high over an inlet of water, surrounded by two landmasses that are dark green and lined by clumps of buildings. The other gondolas and the connecting cables recede downwards far into the distance.',
  'trip1-2-img': 'Looking out a moving bus, as lush foliage along a river zips by, with a green-covered peak unmoving in the distance against a gray cloud-streaked sky.',
  'trip1-3-img': 'A lean white-pawed tabby busy cleaning its front paws on a table at an outdoor shop, standing beside sun-faded plastic baskets of miscellaneous goods and ignoring a hand trying to take its picture on the side.',
  'trip1-4-img': 'A zoom-in from an unintrusive distance on an orange cat stretched on the edge of a concrete planter. The cat notices and briefly appraises the humans behind the camera before looking away boredly.',
  'trip2-1-img': 'A shaky first-person view while weaving through a loose throng of shoppers in a narrow outdoor walkway with stalls on both sides packed with goods and trinkets.',
  'trip2-2-img': 'Brightly-lit storefronts and pulsating red and teal neon signs along a bustling car- and people-filled street at night.',
  'trip2-3-img': 'An outdoor eatery at night under a tented tarp lit by stringed lamps, where many people are seated closely around tables of food in front of a lively walkway and storefronts covered in photo menus.',
  'final1-img': 'Same illustration as before of the messy living room.',
  'final2-img': 'Same illustration as before of the tidy living room, once again from the perspective of the entrance.',
  'end-img': 'A airplane window view after takeoff, overlooking the ocean partially obscured by patches of light-streaked clouds at sunset.',
}

Object.keys(imgAlt).forEach(id => {
  document.getElementById(id).alt = imgAlt[id];
});
