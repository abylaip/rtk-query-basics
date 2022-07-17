import { useAppSelector } from "../hooks/redux";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (!favourites) {
    return <p className="text-center">No items</p>;
  }
  return (
    <div className="container flex mx-auto w-full">
      <ul className="list-none">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
