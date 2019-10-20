// template literals
function addressMaker(city,state){
// objects literals help to  write  cleaner and shorter code
    const newAddress = {City: city,Sate: state};


    // instead of writing it this way
    // const oldAddress = {newCity: city,newSate: state};
    // console.log(newAddress);
    
}
// addressMaker('lagos','ikeja');

// using obj literals is super cool

// the accidental spy


// challenges

function addressMaker(address){
    const {city,state} = address;

    const newAddress = {
        city,
        state,
        country: 'Nigeria'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}
addressMaker({city: 'lagos',state:'ikeja'});