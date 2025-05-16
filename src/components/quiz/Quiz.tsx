import {useQuery} from "@tanstack/react-query";
import {catOrDogApi} from "../../api/api";
import {useState} from "react";
const Quiz = () => {
  const {data, isLoading, refetch, error} = useQuery({
    queryKey: ["catDog"],
    queryFn: catOrDogApi,
  });
  const [score, setScore] = useState(0);

  const scoreUp = (isDog) => {
    if (isDog) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div className="flex flex-col gap-[50px] m-auto mt-[100px] max-w-[500px]">
      <p>რომელია ძაღლის ფოტო:</p>
      <div className="flex gap-[100px] m-auto mt-[10px] max-w-[500px]">
        {data?.map((res, index) => (
          <div key={index}>
            <img
              onClick={() => scoreUp(res.isDog)}
              className="blur-sm w-[200px] h-[200px] cursor-pointer"
              src={res.url}
              alt="dogOrCat"
            />
          </div>
        ))}
      </div>
      <p className="font-bold text-[18px]">score: {score}</p>
    </div>
  );
};

export default Quiz;
