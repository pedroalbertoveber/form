import { StyledForm } from './styles';
import { useState } from 'react';

function Formulario() {

    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState(0);
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [fone, setFone] = useState('');
    const [email, setEmail] = useState('');
    const containerErro = document.getElementById('cep');

    async function alterarEndereco(cep) {
        try {
            const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const enderecoFormatado = await endereco.json();

            if (enderecoFormatado.erro) {
                throw Error('CEP não encontrado');
            }
    
            console.log(enderecoFormatado);
            setLogradouro(enderecoFormatado.logradouro);
            setBairro(enderecoFormatado.bairro);
            setCidade(enderecoFormatado.localidade);
            setUf(enderecoFormatado.uf);

            containerErro.innerHTML = '';

        } catch (erro) {
            console.log(erro);

            const mensagemDeErro = document.createElement('spam');
            mensagemDeErro.innerHTML = 'Cep inexistente';
            containerErro.appendChild(mensagemDeErro);
        }
    }

    return(
        <>
            <StyledForm>
                    <div>
                        <div>
                            <h4>Dados Pessoais</h4>
                        </div>
                        <div>
                            <label>Nome completo:</label>
                            <input type='text' onChange={(e) => setNome(e.target.value)} value={nome}/>
                        </div>
                        <div>
                            <label>Data de Nascimento</label>
                            <input type='date' onChange={(e) => setNascimento(e.target.value)} value={nascimento}/>
                        </div>
                        <div>
                            <label>CPF:</label>
                            <input type='text' onChange={(e) => setCpf(e.target.value)} value={cpf}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Dados de Endereço</h4>
                        </div>
                        <div id='cep'>
                            <label>CEP:</label>
                            <input type='text' onChange={(e) => setCep(e.target.value)} value={cep} onBlur={() => alterarEndereco(cep)}/>
                        </div>
                        <div>
                            <label>Logradouro:</label>
                            <input type='text' value={logradouro} onChange={(e) => setLogradouro(e.target.value)}/>
                        </div>
                        <div>
                            <label>Número:</label>
                            <input type='number' value={numero} onChange={(e) => setNumero(e.target.value)}/>
                        </div>
                        <div>
                            <label>Bairro:</label>
                            <input type='text' value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                        </div>
                        <div>
                            <label>Cidade:</label>
                            <input type='text' value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                        </div>
                        <div>
                            <label>Estado:</label>
                            <input type='text' value={uf} onChange={(e) => setUf(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Dados de Contato</h4>
                        </div>
                        <div>
                            <label>Telefone:</label>
                            <input type='fone' value={fone} onChange={(e) => setFone(e.target.value)}/>
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                </StyledForm>
        </>
    )
}

export default Formulario;