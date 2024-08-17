import CharactersApi from "@/components/charactersApi";

export default function Home() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-black-600"> Personajes Dragon Ball </h1>
      <CharactersApi />
    </div>
  );
}
