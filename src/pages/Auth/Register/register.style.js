import styled from 'styled-components';
import { Button } from '../../../assets/styles/utils';

export const StyledRegister = styled.div`
  background-color: rgb(238, 77, 45);
  min-width: max-content;
`;

export const Banner = styled.div`
  background-image: url(https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/239966284_260048155753968_9064161910469774122_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=igouiY6XAU8AX_bysWU&_nc_ht=scontent.fhph1-1.fna&oh=8df8d9ee30287435771b1630fd5dfad0&oe=6148881D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 78rem;
  min-height: 37.5rem;
  height: 45rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const FormWrapper = styled.div`
  width: 300px;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  border-radius: 0.4rem;
  background-color: #fff;
  padding: 0 2rem;
  height: max-content;
`;
export const FormTitle = styled.div`
  font-size: 15px;
  margin-bottom: 3rem;
  margin-top: 2rem;
  color: #222;
  text-transform: capitalize;
`;
export const Form = styled.form``;

export const FormControl = styled.div`
  margin-bottom: 2rem;
`;
export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    font-size: 11px;
    height: 3.8rem;
    text-transform: uppercase;
  }
`;
export const FormFooter = styled.div`
  text-align: center;
  font-size: 11px;
  margin-bottom: 3rem;
  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.26);
  }
`;
