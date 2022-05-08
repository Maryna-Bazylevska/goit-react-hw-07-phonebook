import styled from "@emotion/styled";
export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: rgb(57, 133, 168);
  font-weight: 500;
  font-size: 15px;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
export const Button = styled.button`
  padding: 5px;
  margin: 7px 0;
  border: none;
  outline: none;
  border-radius: 3px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  cursor: pointer;
  text-transform: capitalize;
  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgb(129, 214, 164);
    color: white;
  }
`;

// export const Form = styled.form`
//   padding: 16px;
//   width: 250px;
//   border: 1px solid black;
//   margin-left: 20px;
// `;
export const Text = styled.p`
  margin: 0;
`;
// export const Button = styled.button`
//   margin-top: 15px;
//   background-color: #fff;
//   border: 1px solid #bdbdbd;
//   border-radius: 3px;
// `;
// export const Input = styled.input`
//   border: 1px solid #bdbdbd;
// `;
