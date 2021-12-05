
const express = require('express');
import {ItemService} from 'src/app/services/item.service.ts'

const app = express();

const port = 3000;

app.listen(port, () => console.log('listening at localhost'));

app.use(express.static('public'));


const bikeObject = {
    categorie: 'Road Bike',
    img: 'https://images.unsplash.com/8/green-bike.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MjZ8MHwxfGNvbGxlY3Rpb258MXxpdUFPTncxaGYza3x8fHx8Mnx8MTYzMzc0NDYzOA&ixlib=rb-1.2.1&q=80&w=400',
    title: 'KTM 2.0',
    price: '500',
    description: 'Lorem Ipsum agbdiabfiabcabciauwciacvabcac'
}

const partsObject = {
    img: 'https://images.unsplash.com/photo-1617307326208-8cbd186cb388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MjZ8MHwxfGNvbGxlY3Rpb258MjF8TWtsdFc4ZVNUa1F8fHx8fDJ8fDE2MzM3NDQ2Mzg&ixlib=rb-1.2.1&q=80&w=400',
    title: 'Part X',
    price: '50',
    description: 'Lorem Ipsum akfbakfbawkfbkawbf'
}

const accessoriesObject = {
    img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MjZ8MHwxfGNvbGxlY3Rpb258MjR8VnpjVVdKSFJqZ0F8fHx8fDJ8fDE2MzM3MzUwMDU&ixlib=rb-1.2.1&q=80&w=400',
    title: 'T-Short',
    price: '90',
    description: 'Lorem Ipsum akakbkabvkjabvkjabwf'
}

// const titleLoop = [];

// for (let i = 0; i < 100; i++){
//     var titles = ["Brand X", "Brand Y", "Brand Z", "Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"];
//     if(i+1 % 1 == 1){
//         titleLoop(i) = titles[0];
//     }
//     if(i+1 % 1 == 2){
//         titleLoop(i) = titles[1];
//     }
// }

const bicycles = { bicycles: []};
const json1 = {
    __collections__ : { bicycles: [], parts: [], accessories: []}
};

const fs = require('fs');

const uuid = require('uuid');


const saveData = (parJson1) =>{

    const finished = (error) => {
        if(error){
            console.error(error)
            return;
        }
    }

    for (let i = 0; i < 100; i++){
        parJson1.__collections__.bicycles.push(bikeObject);
        if (i < 50){
            parJson1.__collections__.parts.push(partsObject);
            parJson1.__collections__.accessories.push(accessoriesObject);
        }
    }

    const jsonData = JSON.stringify(parJson1);

    for (let i = 0; i <100; i++){
        jsonData.__collections__.bicycles[i].id = i
        if (i < 50){
            jsonData.__collections__.parts[i].id = i
            jsonData.__collections__.accessories[i].id = i
        }
    }


    // const jsonData = JSON.stringify(parJson1);
    fs.writeFile('dog.json', jsonData, finished);
}

saveData(json1);