import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/**
 * Text styles
 */
export const TextTitle = styled.Text`
  color: #ccc;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 5px;
`;

export const TextNome = styled.Text`
  color: #404000;
  font-weight: bold;
  font-size: 25px;
  margin-left: 15px;
  margin-bottom: 7px;
`;

export const TextInfo = styled.Text`
  color: #000;
  font-weight: bold;
  margin-left: 15px;
  text-align: center;
  margin-right: 15px;
  text-align: justify;
`;
export const TextSpecialty = styled.Text`
  font-weight: bold;
  margin-left: 15px;
`;
export const TextEnd = styled.Text`
  color: red;
  font-weight: bold;
  text-align: center;
`;
export const TextAuthor = styled.Text`
  color: #000;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 10px;
`;

export const TextComment = styled.Text`
  color: #000;
  font-weight: bold;
  text-align: center;
  color: #888;
  text-align: justify;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Evaluation = styled.Text`
  background-color: green;
  font-size: 16px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  padding: 8px;
  margin-top: -35px;
  border: 2px solid #fff;
`;

/**
 * Image and View
 */

export const BoxModal = styled.View`
  background-color: #555777;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;
export const BoxBody = styled.View`
  width: 90%;
  height: 95%;
  border-radius: 10px;
  background-color: #fff;
`;
export const BoxImage = styled.Image`
  width: 95%;
  height: 180px;
  border-radius: 10px;
  margin: 8px;
`;
export const BoxAvatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 6px solid rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  margin-top: -60px;
`;
export const AreaEvaluation = styled.View`
  flex-direction: row-reverse;
  margin-left: 15px;
`;
