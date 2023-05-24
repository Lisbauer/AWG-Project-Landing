import React, { useState } from "react";
import "./contact.css";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Autocomplete from "@mui/material/Autocomplete";
import "../NAVBAR/navbar.css";
import { styled } from "@mui/material/styles";
import emailjs from "emailjs-com";
import countries from "i18n-iso-countries";
import spanish from "i18n-iso-countries/langs/es.json";

countries.registerLocale(spanish);

const SelectRoot = styled(Autocomplete)({
  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
    display: "none",
  },
  textAlign: "left",
  "& .MuiSelect-select": {
    paddingRight: "32px",
  },
});

emailjs.init("c-8emIEBk9zCo1zHo");

const Contact = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedNombreApellido, setSelectedNombreApellido] = useState("");
  const [selectedEmpresa, setSelectedEmpresa] = useState("");
  const [selectedCorreo, setSelectedCorreo] = useState("");
  const [selectedSitioWeb, setSelectedSitioWeb] = useState("");
  const [selectedTelefono, setSelectedTelefono] = useState("");
  const [countryAnchorEl, setCountryAnchorEl] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

  const countryOptions = Object.entries(countries.getNames("es")).map(
    ([code, name]) => ({
      value: code,
      label: name,
    })
  );
  const serviceOptions = [
    { label: "ABM de productos", value: "ABM de productos" },
    { label: "Retail Readiness", value: "Retail Readiness" },
    { label: "Gestión de cuentas publicitarias", value: "Gestión de cuentas publicitarias" },
  ];
  
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenCountryMenu = (event) => {
    setCountryAnchorEl(event.currentTarget);
  };

  const handleCloseCountryMenu = () => {
    setCountryAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (event, country) => {
    setSelectedCountry(country);
    handleCloseCountryMenu();
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    handleCloseMenu();
  };

  const sortedCountryOptions = countryOptions
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));

  const sendForm = (event) => {
    event.preventDefault();

    if (
      !selectedNombreApellido ||
      !selectedEmpresa ||
      !selectedCorreo ||
      !selectedSitioWeb ||
      !selectedCountry ||
      !selectedTelefono ||
      !selectedService
    ) {
      setShowValidationError(true);
      setShowMessage(false);
      return;
    }
    const templateParams = {
      nombreApellido: selectedNombreApellido,
      empresa: selectedEmpresa,
      correo: selectedCorreo,
      sitioWeb: selectedSitioWeb,
      pais: selectedCountry.label,
      telefono: selectedTelefono,
      servicio: selectedService.label,
    };

    emailjs
      .send("service_wnjxtg7", "template_xx62385", templateParams)
      .then((response) => {
        console.log("Correo enviado con éxito", response.status, response.text);
        setShowMessage(true);
        setShowValidationError(false);
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
      })
      .finally(() => {
        setSelectedNombreApellido("");
        setSelectedEmpresa("");
        setSelectedCorreo("");
        setSelectedSitioWeb("");
        setSelectedCountry(null);
        setSelectedTelefono("");
        setSelectedService(null);
        setShowValidationError(false);
      });
  };

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
          <h3 className="input-title">Completá tus datos aquí</h3>

          <div className="textfield-container">
            <TextField
              style={{
                border: showValidationError && !selectedNombreApellido ? "1px solid red" : "none",
              }}
              sx={{
                width: "450px",
                marginBottom: "28px",
                "@media (max-width: 480px)": {
                  width: "280px",
                },
              }}
              value={selectedNombreApellido}
              onChange={(event) =>
                setSelectedNombreApellido(event.target.value)
              }
              id="outlined-multiline-flexible"
              label="Nombre y apellido"
              multiline
              maxRows={4}
            />
            <TextField
              style={{
                border: showValidationError && !selectedEmpresa ? "1px solid red" : "none",
              }}
              sx={{
                width: "450px",
                marginBottom: "28px",
                "@media (max-width: 480px)": {
                  width: "280px",
                },
              }}
              className="empresa-input"
              value={selectedEmpresa}
              onChange={(event) => setSelectedEmpresa(event.target.value)}
              id="outlined-multiline-flexible"
              label="Empresa"
              multiline
              maxRows={4}
            />
            <TextField
              style={{
                border: showValidationError && !selectedCorreo ? "1px solid red" : "none",
              }}
              sx={{
                width: "450px",
                marginBottom: "28px",
                "@media (max-width: 480px)": {
                  width: "280px",
                },
              }}
              className="correo-input"
              value={selectedCorreo}
              onChange={(event) => setSelectedCorreo(event.target.value)}
              id="outlined-multiline-flexible"
              label="Dirección de correo"
              multiline
              maxRows={4}
            />
            <TextField
              style={{
                border: showValidationError && !selectedSitioWeb ? "1px solid red" : "none",
              }}
              sx={{
                width: "450px",
                marginBottom: "28px",
                "@media (max-width: 480px)": {
                  width: "280px",
                },
              }}
              className="sitio-web-input"
              value={selectedSitioWeb}
              onChange={(event) => setSelectedSitioWeb(event.target.value)}
              id="outlined-multiline-flexible"
              label="Sitio Web"
              multiline
              maxRows={4}
            />
            <Autocomplete
              style={{
                border: showValidationError && !selectedCountry ? "1px solid red" : "none",
                marginBottom: "28px",
                position: "relative",
                
              }}
              options={sortedCountryOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="País"
                  onClick={handleOpenCountryMenu}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <IconButton
                        size="small"
                        onClick={handleOpenCountryMenu}
                      >
                        <ArrowDropDownIcon />
                      </IconButton>
                    ),
                    sx: {
                      "& .MuiSvgIcon-root": {
                        right: "8px",
                        left: "auto",
                        pointerEvents: "none",
                        position: "absolute",
                      },               
                      "@media (max-width: 480px)": {
                      width: "280px",
                },
                    },
                  }}
                />
              )}
              value={selectedCountry}
              onChange={handleCountrySelect}
            />
            <Menu
              anchorEl={countryAnchorEl}
              open={Boolean(countryAnchorEl)}
              onClose={handleCloseCountryMenu}
            >
              {sortedCountryOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option}
                  onClick={(event) => handleCountrySelect(event, option)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
            <TextField
              style={{
                border: showValidationError && !selectedTelefono ? "1px solid red" : "none",
              }}
              sx={{
                width: "450px",
                marginBottom: "28px",
                "@media (max-width: 480px)": {
                  width: "280px",
                },
              }}
              className="telefono-input"
              value={selectedTelefono}
              onChange={(event) => setSelectedTelefono(event.target.value)}
              id="outlined-multiline-flexible"
              label="Número de teléfono"
              multiline
              maxRows={4}
            />

<Autocomplete
  style={{
    border: showValidationError && !selectedService ? "1px solid red" : "none",
    marginBottom: "28px",
    position: "relative",

  }}
  options={serviceOptions}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Servicio de interés"
      onClick={handleOpenMenu}
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <IconButton size="small" onClick={handleOpenMenu}>
            <ArrowDropDownIcon />
          </IconButton>
        ),
        sx: {
          "& .MuiSvgIcon-root": {
            right: "8px",
            left: "auto",
            pointerEvents: "none",
            position: "absolute",
          },   "@media (max-width: 480px)": {
      width: "280px",
    },
        },
      }}
    />
  )}
  value={selectedService}
  onChange={(event, value) => setSelectedService(value)}
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
  <MenuItem onClick={() => handleServiceSelect("Gestión de cuentas publicitarias")}>
    Gestión de cuentas publicitarias
  </MenuItem>
</Menu>

          </div>

          <div className="btn-wp">
            <a
              className="whatsapp-btn-link"
              href="https://wa.me/+5491160510124"
              target="blank"
            >
              {" "}
              <img
                className="whatsapp-logo"
                src="../images/whatsapplogo.png"
                alt="wpplogo"
              />{" "}
            </a>

            <button className="message-button" onClick={sendForm}>
              <strong>Enviar mensaje</strong>
            </button>
          </div>
          <div className="btn-p">
            {showValidationError && (
              <p className="error-p">Complete todos los campos por favor</p>
            )}
            {showMessage && (
              <p className="success-p">En breve lo estaremos contactando</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
