import React from "react";
import "./contact.css";
import TextField from "@mui/material/TextField";
import "./navbar.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="business-boost-section">
        <div className="box-heading-title">
          <h1 className="heading-title">
            CONTACTANOS PARA <br />{" "}
            <span className="highlight-h1">POTENCIAR</span>
            <br />
            TU NEGOCIO
          </h1>
        </div>

        <div className="box-description-title">
          <h3 className="description-title">
            Mejorá el <span className="hightlight-h3">retorno</span> de tu
            inversión
          </h3>
          <h3 className="description-title">
            <span className="hightlight-h3">Aumentá</span> tu volumen de{" "}
            <span className="hightlight-h3">ventas</span>
          </h3>
          <h3 className="description-title">
            Desarrollá tu <span className="hightlight-h3">estrategia</span>
          </h3>
        </div>
      </section>

      <section className="texfield-section">
        <div className="title-textfield-container">
          <h3 className="input-title">Completá tus datos aqui</h3>

          <div className="textfield-container">
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Nombre y apellido"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Empresa"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Direccion de correo"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Sitio Web"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Pais"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Numero de teléfono"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px" }}
              id="outlined-multiline-flexible"
              label="Servicio de interés"
              multiline
              maxRows={4}
            />
          </div>
          <div className="btn-wp">
          <img className="whatsapp-logo" src="../images/whatsapplogo.png" alt="wpplogo" />
          <button className="message-button">
            <strong>Enviar mensaje</strong>
          </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
