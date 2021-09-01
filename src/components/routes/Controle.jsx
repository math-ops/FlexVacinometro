import React, { useEffect, useState } from 'react'
import { OptionSubtitle } from '../../styles/app'
import axios from '../../services/api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Controle() {

  return (
    <>
      <div className="menu-title">
        <OptionSubtitle>Controle de Colaboradores Vacinados</OptionSubtitle>
      </div>
      <FormControle />

    </>
  )
}

export function FormControle() {

  const [colaborador, setColaborador] = useState([]);
  const [empresa, setEmpresa] = useState([]);
  const [risco, setRisco] = useState([]);
  const [gruporisco, setGruporisco] = useState([]);
  
  const [idcolaborador, setIdColaborador] = useState(0);
  const [idempresa, setIdEmpresa] = useState(0);
  const [idrisco, setIdRisco] = useState(0);
  const [idgruporisco, setIdGruporisco] = useState(0);

  useEffect(() => {

    const req = async () => {
      const [
        req_colaborador,
        req_empresa,
        req_risco,
        req_gruporisco,
      ] = await Promise.all([
        axios.get("colaborador"),
        axios.get("empresa"),
        axios.get("risco"),
        axios.get("gruporisco"),
      ]);

      setColaborador(req_colaborador.data);
      setEmpresa(req_empresa.data);
      setRisco(req_risco.data);
      setGruporisco(req_gruporisco.data);
      
    }

    req();

  }, []);

  return (
    <>
    <div className="controle">
      <form action="">
        <div className="form-controle" >

          <label className="form-label">Colaborador</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={colaborador}
            getOptionLabel={(option) => option.nm_colaborador + " - " + option.workday}
            onChange={(event, newValue) => {
              setIdColaborador(newValue?.id);
              console.log(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Colaborador..." variant="standard" />}
          />


          <label className="form-label">Empresa</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={empresa}
            getOptionLabel={(option) => option.nm_empresa }
            onChange={(event, newValue) => {
              setIdEmpresa(newValue?.id);
              console.log(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Empresa..." variant="standard" />}
          />

          <label className="form-label">Risco</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={risco}
            getOptionLabel={(option) => option.nm_risco }
            onChange={(event, newValue) => {
              setIdRisco(newValue?.id);
              console.log(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Risco..." variant="standard" />}
          />

          <label className="form-label">Grupo de Risco</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={gruporisco}
            getOptionLabel={(option) => option.nm_grupo_risco }
            onChange={(event, newValue) => {
              setIdGruporisco(newValue?.id);
              console.log(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Grupo Risco..." variant="standard" />}
          />



          <label className="form-label">Data da Primeira Dose</label>
          <input className="form-input" type="date" name="" id="" placeholder="Data Primeira Dose" />

          <label className="form-label">Status Primeira Dose</label>
          <input className="form-input" type="text" name="" id="" placeholder="Status Primeira Dose" />

          <label className="form-label">Data da Segunda Dose</label>
          <input className="form-input" type="date" name="" id="" placeholder="Data Segunda Dose" />

          <label className="form-label">Status Segunda Dose</label>
          <input className="form-input" type="text" name="" id="" placeholder="Status Segunda Dose" />

          <label className="form-label">Data do Agendamento</label>
          <input className="form-input" type="date" name="" id="" placeholder="Data Agendamento" />

          <label className="form-label">Status</label>
          <input className="form-input" type="text" name="" id="" placeholder="Status" />

          <button className="form-button">Salvar</button>
        </div>
      </form>
      </div>
    </>
  )
}