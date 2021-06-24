export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

//Describes a wide range of shapes that Javscript objects can take.
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}

export interface BreedListAPIResponse{
  animal: Animal
  breeds: string[];
}
