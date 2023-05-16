import React, { useState,  useMemo  } from "react";
import "./contact.css";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import countryList from 'react-select-country-list'
import "./navbar.css";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const SelectRoot = styled(Select)({
  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
    display: "none",
  },
  textAlign: 'left',
  "& .MuiSelect-select": {
    paddingRight: '32px',
  },
});


const Contact = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const options = useMemo(() => countryList().getData(), [])


  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    handleCloseMenu();
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    handleCloseMenu();
  };
  return (
    <div className="contact-container">
      <section className="business-boost-section">
        <div className="box-heading-title" >
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
              
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Nombre y apellido"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Empresa"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Direccion de correo"
              multiline
              maxRows={4}
            />
            <TextField
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Sitio Web"
              multiline
              maxRows={4}
            />
  <FormControl sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}>
              <InputLabel id="country-label">Pais</InputLabel>
              <SelectRoot
                labelId="country-label"
                id="demo-multiple-name"
                value={selectedCountry}
                onChange={(e) => handleCountrySelect(e.target.value)}
                renderValue={(selected) => selected ? selected.label : ""}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option}
                  >
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </SelectRoot>
            </FormControl>
            <TextField
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Numero de teléfono"
              multiline
              maxRows={4}
            />

            <TextField
              sx={{ width: "450px", marginBottom: "28px",
              "@media (max-width: 480px)": {
                width: "280px",
              }, }}
              id="outlined-multiline-flexible"
              label="Servicio de interés"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              onClick={handleOpenMenu}
              InputLabelProps={{
                shrink: selectedService ? true : undefined,
              }}
              InputProps={{
                endAdornment: (
                  <IconButton size="small" onClick={handleOpenMenu}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )
              }}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => handleServiceSelect("ABM de productos")}>
                ABM de productos
              </MenuItem>
              <MenuItem onClick={() => handleServiceSelect("Retail Readiness")}>
                Retail Readiness
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleServiceSelect("Gestión de cuentas publicitarias")
                }
              >
                Gestión de cuentas publicitarias
              </MenuItem>
            </Menu>

          </div>
          <div className="btn-wp">
          <a className="whatsapp-btn-link" href="https://wa.me/+5491160510124" target="blank"> <img
              className="whatsapp-logo"
              src="../images/whatsapplogo.png"
              alt="wpplogo"
            /> </a>
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
