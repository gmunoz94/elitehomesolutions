import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";

// office
import office1 from "assets/img/examples/office1.jpg";
import office2 from "assets/img/examples/office2.jpg";
import office3 from "assets/img/examples/office3.jpg";
import office4 from "assets/img/examples/office4.jpg";
import office5 from "assets/img/examples/office5.jpg";

const useStyles = makeStyles(officeStyle);

export default function PetStainOdorGallery() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>View our recent work!</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office5}
            alt="office5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
