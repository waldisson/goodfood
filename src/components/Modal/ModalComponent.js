import React from "react";
import { Modal } from "react-native";

import {
  AreaEvaluation,
  BoxModal,
  BoxBody,
  BoxImage,
  ButtonBox,
  Container,
  Evaluation,
  TextNome,
  TextInfo,
  TextSpecialty,
  TextComment,
  TextEnd,
  TextAuthor,
  TextTitle
} from "./styles";

export default props => {
  return (
    <Container>
      <Modal visible={props.visible} animationType="fade" transparent={true}>
        <BoxModal>
          <BoxBody>
            <>
              <BoxImage source={{ uri: props.data.url }} />
              <AreaEvaluation>
                <Evaluation>{props.data.Evaluation}</Evaluation>
              </AreaEvaluation>
              <TextTitle>Restaurante</TextTitle>
              <TextNome>{props.data.Nome}</TextNome>
              <TextTitle>Endereço</TextTitle>
              <TextInfo>{props.data.Bairro}</TextInfo>
              <TextTitle>Especialidade</TextTitle>
              <TextSpecialty>{props.data.Especialidade}</TextSpecialty>
              <TextTitle>Biografia</TextTitle>
              <TextInfo>{props.data.Bio}</TextInfo>
              <TextTitle>Comentários</TextTitle>
              <TextAuthor>{props.data.Author}</TextAuthor>
              <TextComment>{props.data.Comment}</TextComment>
            </>
          </BoxBody>
          <ButtonBox onPress={props.visibleAction}>
            <TextEnd>X</TextEnd>
          </ButtonBox>
        </BoxModal>
      </Modal>
    </Container>
  );
};
