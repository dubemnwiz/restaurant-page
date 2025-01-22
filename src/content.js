export const loadHome = (function() {
    var contents = document.createElement('div');

    var name = document.createElement('div');
    var desc = document.createElement('div');
    var loc = document.createElement('div');

    name.textContent = "Dubem's Diner";
    desc.textContent = "Welcome to Dubem's Diner, where classic comfort meets a modern twist! Our cozy and inviting atmosphere is the perfect place to enjoy hearty meals crafted with love and fresh, quality ingredients. Whether you're craving a stacked burger, fluffy pancakes, or a refreshing salad, we’ve got something for everyone.";
    loc.textContent = "589 Winter St, Atlanta, GA 30308";

    contents.id = 'contents';
    name.id = 'name';
    desc.id = 'desc';
    loc.id = 'loc';

    contents.appendChild(name);
    contents.appendChild(desc);
    contents.appendChild(loc);

    return contents;
})();

export const loadMenu = (function() {
    var contents = document.createElement('div');

    var title = document.createElement('div');
    var menu1 = document.createElement('div');
    var menu2 = document.createElement('div');
    var menu3 = document.createElement('div');

    title.textContent = 'MENU';
    menu1.textContent = 'Dubem’s Ultimate Stack Burger - $12';
    menu2.textContent = 'Sunrise Special Pancakes - $11';
    menu3.textContent = 'Homestyle Chicken & Waffles - $13';

    contents.id = 'contents';
    title.id = 'name';
    menu1.id = 'desc';
    menu2.id = 'desc';
    menu3.id = 'desc';

    contents.appendChild(title);
    contents.appendChild(menu1);
    contents.appendChild(menu2);
    contents.appendChild(menu3);

    return contents;
})();

export const loadAbout = (function() {
    var contents = document.createElement('div');

    var title = document.createElement('div');
    var phone = document.createElement('div');
    var email = document.createElement('div');
    var hours = document.createElement('div');

    title.textContent = 'About';
    phone.textContent = 'Phone: 770-328-3923';
    email.textContent = 'Email: dubemdiner@food.com';
    hours.textContent = 'Hours: Sunday-Saturday 10 AM - 11 PM';

    contents.id = 'contents';
    title.id = 'name';
    phone.id = 'desc';
    email.id = 'desc';
    hours.id = 'desc';

    contents.appendChild(title);
    contents.appendChild(phone);
    contents.appendChild(email);
    contents.appendChild(hours);

    return contents;
})();
