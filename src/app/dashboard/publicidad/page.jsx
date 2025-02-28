'use client';

import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import Slider from 'react-slick';

import { db } from '../../../firebase';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card, CardContent, Grid, Typography } from '@mui/material';

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
          <CardContent className="">
            <Typography variant="h5" color="primary">
              {curso.nombre}
            </Typography>
            <img src="/assets/logoeducacion2.png" alt="edu-continua" width={'200px'} />
            <Typography variant="body2">{curso.descripcion}</Typography>
            <Typography variant="subtitle2">Inicio: {new Date(curso.fechaInicio).toLocaleDateString()}</Typography>
            <Typography variant="subtitle2">Fin: {new Date(curso.fechaFin).toLocaleDateString()}</Typography>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={3} sx={{ p: 4 }}>
        {/* Fila 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ backgroundColor: '#FFCCCC', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 1
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ backgroundColor: '#CCFFCC', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 2
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ backgroundColor: '#CCCCFF', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 3
            </Typography>
          </div>
        </Grid>

        {/* Fila 2 */}
        <Grid item xs={12} sm={6} md={8}>
          <div style={{ backgroundColor: '#FFDDCC', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 4 (Ancho Doble)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ backgroundColor: '#DDFFCC', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 5
            </Typography>
          </div>
        </Grid>

        {/* Fila 3 */}
        <Grid item xs={12}>
          <div style={{ backgroundColor: '#FFCCDD', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" align="center">
              Grid 6 (Ancho Completo)
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Slider>
  );
};

export default CursoCarousel;
