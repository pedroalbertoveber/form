import styled from 'styled-components';

export const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ED8B16;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        margin-top: 30px;
        margin-bottom: 50px;
        padding: 30px 0;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 3px 3px 3px rgba(0,0,0,.3);

        div h2 {
            margin-bottom: 30px;
        }

        .titulo-formulario {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;

            h2 {
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
    }
`;

