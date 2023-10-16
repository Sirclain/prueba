import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Formulario() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="container">
            <form>

                <div className="form-group">
                    <label htmlFor="email">Seleccione Fecha:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Basic date picker" />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Especialidad de Atencion:</label>
                    <input type="text" className="form-control" id="especialidad" name="especialidad" placeholder="Especialidad de Atencion" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Nombre del Medico:</label>
                    <input type="text" className="form-control" id="medico" name="medico" placeholder="Nombre del Medico" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Observaciones:</label>
                    <textarea type="text" className="form-control" id="observaciones" name="observaciones" placeholder="Observaciones" defaultValue={""} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Notas:</label>
                    <textarea type="text" className="form-control" id="nota" name="nota" placeholder="Dejar una nota" defaultValue={""} />
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Cargar Archivo</span>
                    <input id="file" type="file" className="form-control" name="file" placeholder="Additional Info" />
                </div>
                <br/>
                <br/>
                <div className="form-group">
                    <button type="submit" name="consultar" className="btn btn-default">consultar</button>
                    <button type="submit" name="guardar" className="btn btn-default">Guardar</button>
                </div>
            </form>
        </div>
    );
}
export default Formulario;