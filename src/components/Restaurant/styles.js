import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
`;

/**
 * Text styles
 */

export const TextNome = styled.Text`
  color: #404000;
  font-weight: bold;
  font-size: 25px;
  margin-left: 15px;
  margin-bottom: 7px;
`;
export const TextAndress = styled.Text`
  color: #000;
  font-weight: bold;
  margin-left: 15px;
`;
export const TextSpecialty = styled.Text`
  color: #ccc;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const TextRestaurant = styled.Text`
  color: #ccc;
  font-weight: bold;
  margin-left: 15px;
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
  margin-top: -20px;
  border: 2px solid #fff;
`;

/**
 * Button, Image and View
 */

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  margin: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  padding: 5px;
`;
export const AreaView = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;
export const AreaEvaluation = styled.View`
  flex-direction: row-reverse;
  margin-left: 15px;
`;
