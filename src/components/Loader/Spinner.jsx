import React from "react";
import { Dimmer, Loader, Container } from "semantic-ui-react";

const Spinner = () => (
  <div>
    <Container textAlign="center" size="massive">
      <Dimmer active inverted>
        <Loader size="massive" inverted>
          Loading
        </Loader>
      </Dimmer>
    </Container>
  </div>
);

export default Spinner;
