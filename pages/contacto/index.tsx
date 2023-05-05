import React from "react";
import Card from '../../components/Card';
import Image from "next/image";
import imageSrc from "public/images/contacto1.jpeg";


import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";


export default function Index() {
 
  return (
    <Layout preview={null}>
      <Head>
        <title>contacto</title>
      </Head>

      <Container>

      <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className=" uppercase text-2xl font-bold mb-4">Contacto</h2>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre completo"
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
             
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"

                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
             
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Ingresa tu teléfono"

                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
             
              <input
                type="organization"
                id="organization"
                name="organization"
                placeholder="Organización / Barrio"

                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2">
              
              <textarea
                id="message"
                name="message"
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                placeholder="Ingresa tu mensaje"

                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>

           
          </form>
        </div>
       <div className="flex flex-col items-center justify-center">
          <a href="https://www.ejemplo.com" target="blank">
            <Image width={2000} height={1000} alt={`contacto`} src={imageSrc} />
          </a>
        </div>
      </div>
    </div>
      </Container>
    </Layout>
  );



}


