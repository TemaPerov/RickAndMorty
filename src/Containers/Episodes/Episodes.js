import styles from "./Episodes.module.css";
import TableEpisods from "./componets/TableEpisods";
import FilterButtons from "./componets/FilterButtons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFunkEpisodes } from "../../store/actions/episods/action";
import { episodes_url } from "../../util/api";

const Episodes = () => {
  const dispatch = useDispatch();
  const episodesList = useSelector(
    (store) => store.episodesReduser.episodesList
  );
  const filterEpisodesList = useSelector(
    (store) => store.episodesReduser.filterEpisodesList
  );

  useEffect(() => {
    dispatch(getDataFunkEpisodes(episodes_url));
  }, []);

  return (
    <>
      {filterEpisodesList && (
        <>
          <FilterButtons
            episodesList={episodesList}
            filterEpisodesList={filterEpisodesList}
          />
          <TableEpisods filterEpisodesList={filterEpisodesList} />
        </>
      )}
    </>
  );
};

export default Episodes;
