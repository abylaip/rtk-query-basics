import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";
import { useState } from "react";

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));
  const addFav = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };
  const removeFav = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };
  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <div className="flex flex-row space-x-2">
          <p className="text-center">
            Forks: <span className="font-bold">{repo.forks_count}</span>
          </p>
          <p className="text-center">
            Watchers: <span className="font-bold">{repo.watchers_count}</span>
          </p>
        </div>
        <p className="font-thin">{repo?.description}</p>
        {!isFav ? (
          <button
            onClick={addFav}
            className="px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          >
            Add
          </button>
        ) : (
          <button
            onClick={removeFav}
            className="px-4 bg-red-400 rounded hover:shadow-md transition-all"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};
