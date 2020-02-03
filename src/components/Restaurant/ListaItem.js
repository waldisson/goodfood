import React, { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
import {
  Container,
  Button,
  Photo,
  AreaView,
  TextNome,
  TextAndress,
  TextSpecialty,
  TextRestaurant,
  Evaluation,
  AreaEvaluation
} from "./styles";

export default props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <AreaView>
        <Button onPress={() => setModalVisible(true)}>
          <>
            <Photo source={{ uri: props.data.url }} />
            <AreaEvaluation>
              <Evaluation>{props.data.Evaluation}</Evaluation>
            </AreaEvaluation>
            <TextRestaurant>Restaurante</TextRestaurant>
            <TextNome>{props.data.Nome}</TextNome>
            <TextAndress>{props.data.Bairro}</TextAndress>
            <TextSpecialty>
              Especialidade: {props.data.Especialidade}
            </TextSpecialty>
          </>
        </Button>
      </AreaView>
      <ModalComponent
        visible={modalVisible}
        visibleAction={() => setModalVisible(false)}
        data={props.data}
      />
    </Container>
  );
};
