import React, { useState, useEffect } from 'react'
import { CSubtitle } from '../../styles/app';
import axios from '../../services/api';
import { useHistory } from 'react-router-dom';
import '../../styles/assets/css/Colaborador.css'

export default function Colaborador() {
  return (
    <>
      <div className="menu-title">
        <CSubtitle>Cadastro de Colaborador</CSubtitle>
      </div>
      <FormCadastro />
    </>
  )
}

export function FormCadastro() {

  const history = useHistory();

  const [nome, setNome] = useState('');
  const [workday, setWorkday] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [gestor, setGestor] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  const [msgSucess, setMsgSucess] = useState('');
  const [msgFail, setMsgFail] = useState('');

  useEffect(() => {
    setIsUpdate(false);
  }, [isUpdate]);

  useEffect(() => {
    setMsgSucess('');
    setMsgFail('');
  }, [nome, workday, cpf, cargo, gestor]);

  function limparCampos() {
    setNome('');
    setWorkday('');
    setCpf('');
    setCargo('');
    setGestor('');
  }

  async function handleSubmit() {

    try {
      await axios.post("colaborador", {
        nm_colaborador: nome,
        workday: workday,
        cpf: cpf,
        nm_cargo: cargo,
        id_gestor: gestor
      });

      limparCampos();
      setIsUpdate(true);
      setMsgSucess(`Colaborador: ${nome} cadastrado com sucesso!!!`);


    } catch (error) {

      const { status } = error.response;

      if (status === 401) {
        return history.push('/sigin');
      }

      try {
        setMsgFail(error.response.data.error.originalError.info.message);
      } catch {
        setMsgFail('Falha ao inserir dados');
      }
      
    }
  }


  return (
    <>
        <div className="colaborador">
      <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
        <div className="cad-colaborador">

          <label className="cad-label" >Nome</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required="*" />

          <label className="cad-label" >Workday</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Workday" value={workday} onChange={(e) => setWorkday(e.target.value)} required />

          <label className="cad-label" >CPF</label>
          <input className="cad-input" type="text" name="" id="" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

          <label className="cad-label" >Cargo</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} required />

          <label className="cad-label" >Gestor</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Gestor" value={gestor} onChange={(e) => setGestor(e.target.value)} required />

          <button className="cad-button">Cadastrar</button>

          <strong className="setSuccess">{msgSucess}</strong>
          <strong className="setError2">{msgFail}</strong>

        </div>
      </form>
      </div>
    </>
  )
}