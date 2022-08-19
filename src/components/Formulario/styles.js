import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 15px;

        h4 {
            margin-bottom: 15px;
            color: #333;
            font-weight: 600;
        }

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 15px;

            input {
                width: 100%;
                margin-top: 5px;
                padding: 10px;
                border-radius: 15px;
                border: 1px solid #ccc;
            }
        }
    }
`