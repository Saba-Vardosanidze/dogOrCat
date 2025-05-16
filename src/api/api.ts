export const catOrDogApi = async () => {
  const cat = "https://api.thecatapi.com/v1/images/search?limit=10";
  const dog = "https://dog.ceo/api/breeds/image/random";

  const [catRef, dogRef] = await Promise.all([
    fetch(cat).then((res) => res.json()),
    fetch(dog).then((res) => res.json()),
  ]);

  const FinalCat = {url: catRef[0].url, isDog: false};
  const FinalDog = {url: dogRef.message, isDog: true};

  return [FinalCat, FinalDog];
};
