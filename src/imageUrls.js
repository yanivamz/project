const prefix =
    'https://fscourse.shaharbest.com/img/chads';

const types = [
    'saudi',
    'indian',
    'greek',
    'french',
    'rapper',
    'israeli',
    'original',
];

const imagesUrls = types
    .map(name => [prefix, `${name}.png`].join('/'));

export { imagesUrls };