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
      
            //Dog-specific
            petSize: '',
            //Cat-specific
            petHair: '',
            
    },
    EXISTING_PET_STATE:
    {
    }

}

export const ALL_BREEDS = PET_CONSTANTS.DOG_BREEDS.concat(PET_CONSTANTS.CAT_BREEDS)
    .concat(PET_CONSTANTS.OTHER_BREEDS)

export const PAYPAL_ID ={
  sandbox: 'AZTgVpcOy33Gl1mv4qzOi3znpx3vLMMMo5Qad4_btMXUWJ4etnmNt-XzEYT9lriaYQhUIjK0hxyn41OQ',
}
