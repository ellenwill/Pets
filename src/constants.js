export const PET_CONSTANTS = {
    ANIMAL_TYPES: ['Dog', 'Cat', 'Other'],
    DOG_BREEDS: ['Fuzzball', 'Roly Poly', 'Mutt'],
    CAT_BREEDS: ['Tortie', 'Cowico', 'Siamese'],
    OTHER_BREEDS: ['Bunny', 'Tuttle', 'Birb'],

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

    DEFAULT_PET_STATE:
    {
            photoURL: '',
            petID: '',
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

export const PAYPAL_ID ={
  sandbox: 'AZTgVpcOy33Gl1mv4qzOi3znpx3vLMMMo5Qad4_btMXUWJ4etnmNt-XzEYT9lriaYQhUIjK0hxyn41OQ',
}
