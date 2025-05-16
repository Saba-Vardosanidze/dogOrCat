import {useQuery} from "@tanstack/react-query";
import {catOrDogApi} from "../../api/api";
const Quiz = () => {
  const {data, isLoading, refetch, error} = useQuery({
    queryKey: ["catDog"],
    queryFn: catOrDogApi,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div className="flex gap-[100px] m-auto mt-[100px] max-w-[500px]">
      {data?.map((res, index) => (
        <div key={index}>
          <img
            className="blur-sm w-[200px] h-[200px] cursor-pointer"
            src={res.url}
            alt="dogOrCat"
          />
        </div>
      ))}
    </div>
  );
};

export default Quiz;
