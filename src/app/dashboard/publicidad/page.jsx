'use client';

import React, { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import Slider from 'react-slick';
import { db } from '../../../firebase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import QRCode from 'react-qr-code';

const CursoCarousel = () => {
  const [cursos, setCursos] = useState([]);

  // Cargar cursos en tiempo real desde Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'cursos'), (snapshot) => {
      setCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const settings = {
    dots: true,
    infinite: cursos.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: cursos.length > 1,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {cursos.map((curso) => (
        <Card key={curso.id} sx={{ p: 3, m: 2, textAlign: 'center' }}>
          <CardContent>
            <Grid container spacing={2}>
              {/* Columna para el contenido */}
              <Grid item xs={6}>
                <Typography variant="h5" color="primary">
                  {curso.nombre}
                </Typography>
                <Typography variant="body2">{curso.descripcion}</Typography>
                <Typography variant="subtitle2">Inicio: {new Date(curso.fechaInicio).toLocaleDateString()}</Typography>
                <Typography variant="subtitle2">Fin: {new Date(curso.fechaFin).toLocaleDateString()}</Typography>
              </Grid>

              {/* Columna para el QR y logo */}
              <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Logo encima del QR */}
                <img src="/assets/logoeducacion2.png" alt="edu-continua" width={'150px'} style={{ marginBottom: '10px' }} />
                
                {curso.googleFormLink && curso.googleFormLink.trim() !== "" ? (
                  <QRCode value={curso.googleFormLink} size={128} /> // Mostrar el QR solo si el link está definido
                ) : (
                  <Typography variant="body2" color="error">No hay enlace disponible</Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default CursoCarousel;
