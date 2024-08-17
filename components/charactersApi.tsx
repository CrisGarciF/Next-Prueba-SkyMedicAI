"use client";

import * as React from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import axios from "axios";
import Image from "next/image";
import { Alert } from "./ui/alert";

const CharactersApi = () => {
  //states
  const [characters, setCharacters] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  //Effect
  React.useEffect(() => {
    const AxiosCharacters = async () => {
      try {
          const response = await axios.get('https://dragonball-api.com/api/characters?limit=100')
          setCharacters(response.data.items)
      } catch (error) {
          console.log('Error:', error);
      }
  }

  AxiosCharacters()
  }, []);

  //Errors

  if (error) {
    return <div>Error: {error} </div>;
  }

  if (characters.length === 0) {
    return <div>Cargando...</div>;
  }

  //mapeo
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {characters.map((character) => (
    <Card
      key={character.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105 hover:bg-gray-500"
    >
      <CardHeader className="bg-blue-600 text-white p-4 text-center hover:bg-green-500">
        <CardTitle className="text-xl font-bold">{character.name}</CardTitle>
        <CardDescription className="text-sm">{character.specie}</CardDescription>
      </CardHeader>

      <CardContent className="p-4 flex justify-center">
        <Image src={character.image} alt={character.name} width={100} height={100} className="rounded-md" />
      </CardContent>

      <CardFooter className="bg-gray-100 p-4 flex flex-col items-center mt-auto">
        <p className="text-gray-700 mb-2">
          <strong>Género:</strong> {character.gender}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Raza:</strong> {character.race}
        </p>
        <p className="text-gray-700">
          <strong>Afiliación:</strong> {character.affiliation}
        </p>
      </CardFooter>
    </Card>
  ))}
</div>

  );
};

export default CharactersApi;

