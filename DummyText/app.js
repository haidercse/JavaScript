const dummyText = [
    'Gingerbread pie macaroon sweet powder macaroon sesame snaps carrot cake. Pie soufflé jelly-o danish chocolate bar fruitcake halvah danish. Dessert chupa chups marzipan wafer tootsie roll chocolate bar. Gummi bears chupa chups shortbread danish donut bonbon. Icing marzipan sesame snaps candy lollipop donut. Cotton candy cookie icing macaroon tart oat cake. Caramels jelly-o lollipop caramels brownie pudding bonbon shortbread. Topping chupa chups chocolate bar cake sweet roll cake wafer. Cake biscuit biscuit lollipop danish. Powder halvah dragée fruitcake pie chupa chups sweet jujubes marzipan. Macaroon chocolate cake biscuit ice cream liquorice. Caramels wafer candy canes tootsie roll dragée jujubes wafer gingerbread croissant. Pastry wafer halvah lemon drops jelly gummi bears cookie pie.',
    'Chupa chups muffin tootsie roll brownie sugar plum bonbon sweet icing sweet. Wafer cake croissant jelly danish brownie marshmallow fruitcake soufflé. Sugar plum oat cake soufflé apple pie tootsie roll toffee jelly-o bear claw chocolate cake. Tootsie roll fruitcake candy ice cream wafer. Gummi bears sugar plum gummies carrot cake pie cake. Tootsie roll donut sweet roll macaroon tootsie roll apple pie croissant oat cake cake. Wafer sugar plum apple pie pie marzipan. Lollipop toffee pastry candy canes chocolate cake cake sugar plum. Cake lollipop chocolate lemon drops chocolate bar dessert chupa chups. Bonbon wafer sesame snaps candy brownie tootsie roll candy canes. Topping gingerbread jelly beans gummi bears sweet roll topping toffee pastry fruitcake. Cotton candy biscuit ice cream pudding wafer donut jelly-o dragée macaroon.',
    'Liquorice halvah sweet donut croissant pastry carrot cake fruitcake. Cotton candy tiramisu cake chocolate tootsie roll jelly lemon drops cookie. Dragée tart dessert chocolate cake danish soufflé dessert oat cake. Brownie candy canes topping danish chocolate cake cake lemon drops. Cheesecake chocolate cake marzipan shortbread liquorice icing muffin. Jelly jujubes pie sugar plum macaroon sweet roll chocolate cake pie chocolate. Cookie cheesecake marshmallow cake gummies gummies liquorice cookie soufflé. Toffee muffin bear claw topping chocolate bar brownie. Topping chocolate danish pastry cupcake sesame snaps lollipop. Wafer tootsie roll jelly-o jelly jelly brownie cotton candy jelly biscuit. Jelly-o powder oat cake sweet icing liquorice sesame snaps. Marzipan bonbon icing oat cake bonbon gummies marshmallow lollipop oat cake. Wafer brownie jelly-o cupcake bonbon carrot cake. Tart sugar plum brownie sweet liquorice gummies.',
    'Chupa chups jelly beans tart sesame snaps bonbon. Pastry marzipan dessert cake ice cream topping oat cake bear claw. Dragée cookie bear claw tootsie roll gummies caramels brownie. Biscuit jujubes jelly soufflé gummies tootsie roll pudding muffin. Jujubes liquorice powder topping chocolate cheesecake oat cake danish candy. Oat cake danish chupa chups dragée caramels bear claw croissant jelly beans pie. Chocolate cake chocolate jujubes gingerbread chocolate cake halvah soufflé. Candy icing biscuit gingerbread bonbon tart cotton candy pudding. Tart marshmallow bear claw bonbon wafer ice cream sesame snaps pastry jelly-o. Pudding liquorice chocolate bar chocolate chocolate bar tart. Candy canes cheesecake chocolate jujubes toffee cake biscuit caramels fruitcake. Sesame snaps jujubes lollipop carrot cake cake marzipan sweet roll jelly-o. Powder marshmallow jelly cookie chocolate bar pastry lemon drops.',
    'Sesame snaps croissant fruitcake toffee lemon drops cake topping. Chocolate candy canes cupcake croissant sweet jelly-o lemon drops. Toffee halvah sugar plum croissant lemon drops. Sweet roll gummi bears topping jelly chocolate cake. Cookie muffin wafer soufflé apple pie. Sesame snaps jujubes brownie cotton candy carrot cake. Powder marzipan chocolate sugar plum tart muffin wafer lollipop croissant. Gingerbread jelly icing wafer tiramisu marzipan biscuit dragée. Macaroon sugar plum cupcake pie macaroon. Tootsie roll cheesecake pastry pudding croissant sweet roll danish gummies. Caramels gummi bears brownie cookie cheesecake toffee liquorice gummies. Pudding chocolate tootsie roll cookie marshmallow marshmallow fruitcake ice cream icing. Soufflé oat cake gingerbread bonbon topping carrot cake jelly tootsie roll danish. Brownie toffee sweet cookie chocolate cake.',
    'Apple pie fruitcake cupcake tiramisu gummi bears dessert dessert halvah. Liquorice cotton candy cupcake gummi bears sweet marshmallow. Sugar plum sweet candy lemon drops fruitcake candy biscuit jelly-o. Jelly beans tiramisu gummies caramels ice cream gummi bears candy. Pudding sweet pudding danish icing dragée chupa chups. Chocolate cake jelly ice cream chocolate cake chocolate cake. Oat cake candy canes jelly beans icing apple pie carrot cake oat cake chocolate cake chocolate cake. Shortbread biscuit sugar plum gingerbread cake chocolate bar cookie. Macaroon toffee sesame snaps croissant chupa chups tart halvah fruitcake wafer. Pastry ice cream marshmallow fruitcake lemon drops. Jelly-o bear claw dessert oat cake tootsie roll topping biscuit cookie. Oat cake sweet lollipop cake donut chocolate bar.',
    'Sugar plum chocolate cake cotton candy jelly beans chocolate cake. Sugar plum chocolate bar sesame snaps marshmallow gummi bears croissant apple pie. Pie chocolate bar cheesecake macaroon gummi bears croissant. Cupcake sesame snaps cheesecake jelly-o sweet lemon drops pie shortbread biscuit. Sugar plum cheesecake cake danish brownie sesame snaps powder ice cream. Candy lollipop soufflé shortbread cheesecake candy canes lemon drops oat cake liquorice. Cookie cheesecake cake tootsie roll jelly marshmallow croissant sesame snaps cheesecake. Shortbread soufflé dessert jelly donut gummi bears dessert topping. Wafer bear claw bear claw jelly beans danish wafer dessert lemon drops chocolate. Danish macaroon muffin icing dessert toffee jelly-o pastry cheesecake. Carrot cake gummies gummi bears marzipan muffin. Gingerbread toffee ice cream chocolate cake liquorice soufflé jujubes chocolate cake donut.',
    'Brownie oat cake candy canes cupcake fruitcake. Chocolate bar jelly beans bonbon chocolate chupa chups wafer. Jujubes powder halvah powder tart lemon drops bonbon chocolate bar oat cake. Macaroon gingerbread macaroon toffee jelly lollipop marshmallow pastry. Carrot cake toffee brownie tiramisu caramels macaroon pie chupa chups soufflé. Fruitcake pastry macaroon gingerbread sweet roll oat cake chocolate bar. Jelly beans ice cream powder dragée candy canes sesame snaps dessert. Sweet sweet pudding cupcake sweet dragée. Cotton candy liquorice cookie gummies brownie candy shortbread tart icing. Jelly-o pie pie tart cotton candy gummi bears sugar plum soufflé macaroon. Gummies tiramisu cotton candy toffee donut gummies jelly pudding. Danish gingerbread marzipan jelly-o icing apple pie halvah. Biscuit cotton candy donut bear claw jujubes cotton candy macaroon croissant wafer. Jelly beans marshmallow cake marzipan jujubes sweet roll cotton candy chocolate sweet roll.',
    'Biscuit bear claw danish cake wafer tiramisu gummi bears tiramisu croissant. Halvah tootsie roll chupa chups donut soufflé ice cream lemon drops dragée. Halvah marzipan jelly beans chupa chups pastry cotton candy sesame snaps jelly muffin. Oat cake sweet candy sugar plum marshmallow. Tart cake lollipop marzipan toffee gummies sweet tart. Cupcake biscuit pastry cookie icing. Biscuit brownie pie macaroon halvah. Bear claw biscuit donut soufflé carrot cake. Dragée cake apple pie topping apple pie pudding chocolate cake pudding. Cotton candy toffee soufflé dragée cotton candy chocolate bar jelly beans. Cake marshmallow carrot cake candy canes bear claw pastry jelly jelly beans. Candy oat cake oat cake brownie cotton candy shortbread bear claw tootsie roll croissant.',
];
console.log(dummyText.length);

//selecting elements
let form = document.querySelector('#form');
let Paragraph = document.querySelector('#Paragraph');
let Result = document.querySelector('#results');

form.addEventListener('submit', generator);

function generator(e) {
    e.preventDefault();

    const inputAmount = parseInt(Paragraph.value);
    const random = Math.floor(Math.random() * dummyText.length);

    if (Paragraph.value === '') {
        alert('Please, Input something!');
    } else if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > 9) {
        Result.innerHTML = `<p>${dummyText[random]}</p>`;
    } else {
        const slicedArray = dummyText.slice(0, inputAmount);
        const finalArray = slicedArray.map(function(singleDummy) {
            return `<p>${singleDummy}</p>`;
        }).join("");

        //display the dummy text
        Result.innerHTML = finalArray;
    }


}

//map method()
const books = [
    { author: 'Humayon Ahmed', available: 30 },
    { author: 'Jafor Ikbal', available: 15 },
    { author: 'Ahmed sofa', available: 3 },
    { author: 'Tanju', available: 6 },
];

const bookMap = books.map(item => {
    return {
        name: `${item.author}`,
        available: `${item.available}`
    };
});
console.log(bookMap);