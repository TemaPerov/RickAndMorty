import styles from "./Characters.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { character_url } from "../../util/api";
import { getDataFunk } from "../../store/actions/characterActions/action";
import CardForm from "./componets/Card";
import FilterMeny from "./componets/FilterMeny";

const Characters = () => {
  const caractersList = useSelector(
    (state) => state.characterReduser.characterList
  );
  const filterCaractersList = useSelector(
    (state) => state.characterReduser.filterCharacterList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFunk(character_url));
  }, []);

  return (
    <>
      {caractersList.results && (
        <Container maxWidth="lg">
          <FilterMeny caractersList={caractersList.results} />
          <Grid container justifyContent="center" alignItems="flex-start">
            <CardForm caractersList={filterCaractersList} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Characters;
