import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import Photo1 from '../../assets/repartidor-contento-por-su-nuevo-carro.jpeg'
import Photo2 from '../../assets/mujer-comprando-un-carro-al-mejor-precio.jpeg'
import Photo3 from '../../assets/v80-cargo.png'
import Photo4 from '../../assets/hombre-compra-auto-para-trabajar.jpeg'
import Photo5 from '../../assets/Maxus-t70-pro.jpeg'
import Photo6 from '../../assets/un-nuevo-propietario-de-camion.jpeg'


const WhyMazAutos = () => {
    const articles = [
        {
            title: "Para crecer tu negocio",
            image: Photo1,
            excerpt: "Trabajamos con marcas como Maxus, Jetour, Changan, Chery, Toyota",
            link: "/article1",
            minHeight:'32vh',
        },
        {
            title: "Para tu primer auto",
            image: Photo2,
            excerpt: "Al reservar al menos un carro, obtienes el precio de flota",
            link: "/article2",
            with:"8vw",
            minHeight:'20vh',
        },
        {
            title: "Para Pymes",
            image: Photo3,
            excerpt: "¿No sabes que carro reservar? Te ayudamos.",
            link: "/article3",
            with:"10vw",
            minHeight:'32vh',
        },
        {
            title: "Para un ingreso extra luego del trabajo",
            image: Photo4,
            excerpt: "Trabajamos con marcas como Maxus, Jetour, Changan, Chery, Toyota",
            link: "/article4",
            minHeight:'40vh',
        },
        {
            title: "Para el offroad",
            image: Photo5,
            excerpt: "Al reservar al menos un carro, obtienes el precio de flota",
            link: "/article5",
            with:"8vw",
            minHeight:'32vh',
        },
        {
            title: "Para grandes transportistas",
            image: Photo6,
            excerpt: "¿No sabes que carro reservar? Te ayudamos.",
            link: "/article6",
            with:"10vw",
            minHeight:'32vh',
        },
      ];

  return (
    <Box spacing={2} sx={{
        bgcolor:'#00B3FF55',
        width:'100vw',
        py:4,
        px:0,
        m:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
        <Masonry columns={3} spacing={3} sx={{
            width:'90vw',
            m:'0 auto',
            px:1,

        }}>
        {articles.map((article, index) => (
          
            <Card key={index} sx={{
                m:'16px auto',
                bgcolor:'white',
                borderRadius:'15px',
                alignItems:'top',
                mx:3,
                // height:article.heightcard,
            }}>
              <CardMedia
                component='img'
                src={`${article.image}`}
                title={article.title}
                sx={{
                    minHeight:article.minHeight,
                    height:article.minHeight,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" sx={{
                    fontSize:'1.2rem',
                }}>
                  {article.title}
                </Typography>
                {/* <Button variant="contained" color="primary" href={article.link}>
                  Leer más
                </Button> */}
              </CardContent>
            </Card>
        ))}
    </Masonry>
    </Box>
  );
};

export default WhyMazAutos;

