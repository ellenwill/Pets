export const PET_CONSTANTS = {
    ANIMAL_TYPES: ['Dog', 'Cat', 'Other'],
    DOG_BREEDS: ['Fuzzball', 'Roly Poly', 'Mutt'],
    CAT_BREEDS: ['Tortie', 'Cowico', 'Siamese'],
    OTHER_BREEDS: ['Bunny', 'Tuttle', 'Birb'],

    DOG_SPECIFIC_TRAITS: {
        Size: ['Small', 'Medium', 'Large'],
        Attitude: ['Friendly', 'Skittish'],
    },

    DEFAULT_PET_STATE:
    {
            photoURL: '',
            petID: null,
            //animalType: null,   //Commented out since it does dumb things to the form otherwise.
            petName: '',
            petBreed: '',
            petAge: '',
            petDescription: '',
      
            //Dog-specific
            petSize: '',
            //Cat-specific
            petHair: '',
            
        },
    EXISTING_PET_STATE:
    {

    }

}