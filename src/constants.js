export const PET_CONSTANTS = {
    ANIMAL_TYPES: ['Dog', 'Cat', 'Other'],
    DOG_BREEDS: ['Fuzzball', 'Roly Poly', 'Mutt'],
    CAT_BREEDS: ['Tortie', 'Cowico', 'Siamese'],
    OTHER_BREEDS: ['Bunny', 'Tuttle', 'Birb'],

    //There's an ALL_BREEDS defined below -- it couldn't be defined inside this
    //same object.

    ANIMAL_TRAITS: {
        DOG_SPECIFIC_TRAITS: {
            //ALWAYS update this if a new trait is added!
            Size: ['Small', 'Medium', 'Large'],
            Attitude: ['Friendly', 'Skittish'],
            },
        CAT_SPECIFIC_TRAITS: {
            Hair: ['Fuzzy', 'Extra Fuzzy', 'Not Fuzzy At All'],
        }
    },

    GENDER: ['male', 'female', 'unknown'],

    DEFAULT_PET_STATE:
    {
            photoURL: '',
            petID: '',
            //animalType: null,   //Commented out since it does dumb things to the form otherwise.
            petName: '',
            petBreed: '',
            petAge: '',
            petDescription: '',
            gender: '',
            photoURL: '',
            petProviderID: '',
            
            //Location
            usstate: '',

            //Dog-specific
            petSize: '',
            //Cat-specific
            petHair: '',
            
    },
}

//This is to enforce uniformity of pets.
export function EXISTING_PET_STATE(pet)
{
    let newPet = {}
    if (pet.petID) {newPet.petID = pet.petID}
    else {pet.petID = ''}
    if (pet.petProviderID) {newPet.petProviderID = pet.petProviderID}
    else (newPet.petProviderID = '')
    if (pet.usstate) {newPet.usstate = pet.usstate}
    else {newPet.usstate = ''}

    newPet.street = ''; newPet.city = ''; newPet.zip = '';
    newPet.photoURL = pet.photoURL
    newPet.gender = pet.gender
    newPet.animalType = pet.animalType
    newPet.petName = pet.petName
    newPet.petBreed = pet.petBreed
    newPet.petAge = pet.petAge
    newPet.petDescription = pet.petDescription
    //Dogs
    if (pet.animalType === 'Dog') {
        newPet.petSize = pet.petSize;
      }
    //Cats
    else if (pet.animalType === 'Cat') {
        newPet.petHair = pet.petHair;
    }
    return newPet;
}

export const PET_PROVIDER = {
    petProviderID: '',
    name: '',
    
    //location
    street: '',
    city: '',
    usstate: null,
    zip: '',
    
    websiteURL: '',
    description: '',
    phoneNumber: '',
    email: '',
    hours: '',
    photoURL: '',
    admins: [],         //users who admin for this
}

export const STATES = ['Maryland']

//export const COUNTIES = ['Baltimore', 'Baltimore County']

export function EXISTING_PET_PROVIDER(petProvider) {
    let newPetProvider = {}
    if (petProvider.petProviderID) {newPetProvider.petProviderID = petProvider.petProviderID}
    else {petProvider.petProvider = ''}
    if (petProvider.usstate) {newPetProvider.usstate = petProvider.usstate}
    else {newPetProvider.usstate = ''}

    newPetProvider.name = petProvider.name;
    newPetProvider.street = petProvider.street;
    newPetProvider.city = petProvider.city;
    newPetProvider.zip = petProvider.zip;
    newPetProvider.websiteURL = petProvider.websiteURL;
    newPetProvider.description = petProvider.description;
    newPetProvider.phoneNumber = petProvider.phoneNumber;
    newPetProvider.email = petProvider.email;
    newPetProvider.hours = petProvider.hours;
    newPetProvider.photoURL = petProvider.photoURL;

    if (petProvider.admins) {newPetProvider.admins = petProvider.admins}
    else {newPetProvider.usstate = []}

    return newPetProvider;
}

export const ALL_BREEDS = PET_CONSTANTS.DOG_BREEDS.concat(PET_CONSTANTS.CAT_BREEDS)
    .concat(PET_CONSTANTS.OTHER_BREEDS)

export const PAYPAL_CONSTANTS ={
  PAYPAL_ID: ['AbVZZuhh21jS6GIn6_q4hwexB1JNPCNH7u7Le2o-JamBeCWZ5EYK6HsMqL5EZ3byrbal5GFvF3ElNSU9',
   'Afq44MVvKizGbUXmKlqDBZr5UoDzaJLRCHJFVx-PEgfLiNWzhcSs3zJ9wv8P6w8M3cd2NlWMItz6RMR0'],
   PET_PROVIDER_NAMES:['PetProvider1', 'PetProvider2'],

   PET_PROVIDER_TEST1:'AbVZZuhh21jS6GIn6_q4hwexB1JNPCNH7u7Le2o-JamBeCWZ5EYK6HsMqL5EZ3byrbal5GFvF3ElNSU9',
   PET_PROVIDER_TEST2:'Afq44MVvKizGbUXmKlqDBZr5UoDzaJLRCHJFVx-PEgfLiNWzhcSs3zJ9wv8P6w8M3cd2NlWMItz6RMR0'
}

export const DEFAULT_USER = {
    databaseID: '',
    uid: '',
    email: '',
    username: '',
    photoURL: '',
    petsOwned: [],  //Pets they own. This is their personal pets, not their institution's.
    adminFor: [],   //Pet Providers they are the admin for. The PetProvider should check if this person is their admin
    admin: false,   //Whether they are an admin
    globalAdmin: false,
}

export function EXISTING_USER(user) {
    let newUser = {};
    if (user.databaseID){newUser.databaseID = user.databaseID} else{newUser.databaseID = ''}
    if (user.uid){newUser.uid = user.uid} else{newUser.uid = ''}
    if (user.email){newUser.email = user.email} else {newUser.email = ''}
    if (user.username){newUser.usersame = user.username} else {newUser.usersame = ''}
    if (user.photoURL){newUser.photoURL = user.photoURL} else {newUser.photoURL = ''}
    if (user.petsOwned){newUser.petsOwned = user.petsOwned} else {newUser.petsOwned = []}
    if (user.adminFor){newUser.adminFor = user.adminFor} else {newUser.adminFor = []}
    newUser.admin = user.admin;
    newUser.globalAdmin = user.globalAdmin;
}

let CURRENT_USER = DEFAULT_USER

export function SET_USER(user){
    
    CURRENT_USER = user;
}

export function GET_USER(){
    return CURRENT_USER
}

export const USSTATES = ['Maryland']