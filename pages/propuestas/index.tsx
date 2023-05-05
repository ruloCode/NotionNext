import React from "react";
import Card from '../../components/CardProposal';
import genero from '../../public/images/Genero.jpg'
import movilidad from 'public/images/Movilidad.jpg'
import futuroVerde from 'public/images/FuturoVerde.jpg'
import bienestar from 'public/images/Bienestar.jpg'

import PostPreview from "../../components/post-preview";
import Header from "../../components/header";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import { getAllPostsForHome } from "../../lib/api";

import { GetStaticProps } from "next";

export default function Index() {
  const cards = [
    {
      id: 1,
      imageSrc: genero,
      alt: 'Card 1',
      title: 'Genero',
      description: 'Equidad y oportunidades',
    },
    {
      id: 2,
      imageSrc: movilidad,
      alt: 'Card 2',
      title: 'Movilidad',
      description: 'Accesibilidad y calidad',
    },
    {
      id: 3,
      imageSrc: futuroVerde,
      alt: 'Card 3',
      title: 'Futuro Verde',
      description: 'Sostenible y ecológico',
    },
    {
      id: 4,
      imageSrc: bienestar,
      alt: 'Card 4',
      title: 'Bienestar',
      description: 'una vida mejor y saludable',
    },
  ];
  return (
    <Layout preview={null}>
      <Head>
        <title >Propuestas</title>
      </Head>

      <Container>
        {/* <Header /> */}

        <section>
  <h2 className="uppercase mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
    Propuestas
  </h2>
  <div className="grid grid-cols-1 gap-y-20 md:gap-y-32 lg:gap-x-32 mb-32">
    {cards.map((card, index) => {
      const direction = index % 2 === 0 ? 'left' : 'right';
      return <Card direction={direction} key={card.id} {...card} />;
    })}
  </div>

</section>

      </Container>
    </Layout>
  );
}


