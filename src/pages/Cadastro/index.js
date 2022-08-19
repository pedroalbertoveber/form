import Formulario from '../../components/Formulario';
import { StyledMain } from './styles';

function Cadastro() {
    return(
        <StyledMain>
            <section>
                <div className='titulo-formulario'>
                    <h2>
                        Cadastramento
                    </h2>
                </div>
                <Formulario />
            </section>
        </StyledMain>
    );
}

export default Cadastro;